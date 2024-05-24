"use client";

import useImage from "use-image";
import { FC, useEffect, useRef, useState } from "react";
import { Image, Layer, Line, Stage } from "react-konva";
import React from "react";
import { useWritable } from "react-use-svelte-store";
import { Region, regionStore, resetRegions } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Konva from "konva";
import { generateImage } from "@/app/actions";
import { rejects } from "assert";

type CanvasImageProps = {
  src: string;
};

function getRelativePointerPosition(node) {
  // the function will return pointer position relative to the passed node
  const transform = node.getAbsoluteTransform().copy();
  // to detect relative position we need to invert transform
  transform.invert();

  // get pointer (say mouse or touch) position
  const pos = node.getStage().getPointerPosition();

  // now we find relative point
  return transform.point(pos);
}

function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    if (!url) return resolve(null);

    let img = document.createElement("img");

    function onload() {
      return resolve(img);
    }

    function onerror() {
      return reject();
    }

    img.addEventListener("load", onload);
    img.addEventListener("error", onerror);

    img.src = url;

    return function cleanup() {
      img.removeEventListener("load", onload);
      img.removeEventListener("error", onerror);
    };
  });
}

export const CanvasImage: FC<CanvasImageProps> = ({ src }) => {
  useEffect(() => {
    if (src) {
      setNewImage(src);
    }
  }, [src]);

  const [dataUrl, setDataUrl] = useState<string | null>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [exported, setExported] = useState(false);

  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (dataUrl) {
      loadImage(dataUrl).then((img) => {
        console.log("img", img);
        setImage(img);
      });
    }
  }, [dataUrl]);

  const stageRef = useRef();
  const imageRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);

  const initialId = crypto.randomUUID();

  const [regions, setRegions] = useWritable<Region[]>(regionStore);

  const [history, setHistory] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const pushHistory = (url: string) => {
    setHistory(history.concat([url]));
  };

  const undo = () => {
    const last = history[history.length - 1];

    if (last) {
      const newHistory = history.slice(0, history.length - 1);
      setHistory(newHistory);
      setDataUrl(newHistory[newHistory.length - 1]);
    }
  };

  const setNewImage = (url: string) => {
    setDataUrl(url);
    pushHistory(url);
    resetRegions();
  };

  const [selectedId, setSelectedId] = useState<string>(initialId);
  const [imageProps, setImageProps] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setInputValue("");
    }
  };

  useEffect(() => {
    if (image && stageRef.current) {
      const stageWidth = 600;
      const stageHeight = 400;

      // Calculate the aspect ratio
      const aspectRatio = image.width / image.height;
      let newWidth, newHeight;

      if (stageWidth / stageHeight < aspectRatio) {
        // Fit to width
        newWidth = stageWidth;
        newHeight = stageWidth / aspectRatio;
      } else {
        // Fit to height
        newWidth = stageHeight * aspectRatio;
        newHeight = stageHeight;
      }

      setImageProps({
        width: newWidth,
        height: newHeight,
        x: (stageWidth - newWidth) / 2, // Center the image horizontally
        y: (stageHeight - newHeight) / 2, // Center the image vertically
      });
    }
  }, [image, stageRef]);

  const download = (url: string) => {
    // Download the image (or do anything else you need with the data URL)
    const link = document.createElement("a");
    link.download = "mask.png";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExport = async () => {
    setIsLoading(true);
    resetInput();
    const stage = imageRef.current;

    // Create a new temporary stage
    const tempStage = new Konva.Stage({
      container: document.createElement("div"),
      width: stage.width(),
      height: stage.height(),
    });

    const layer = new Konva.Layer();
    tempStage.add(layer);

    // Create a black rectangle to cover the entire canvas
    const blackRect = new Konva.Rect({
      width: stage.width(),
      height: stage.height(),
      fill: "black",
    });

    layer.add(blackRect);

    console.log("regions", regions);

    const transformPoints = (points) => {
      return points.map((point) => {
        const x = (point.x - imageProps.x) * (imageProps.width / stage.width());
        const y =
          (point.y - imageProps.y) * (imageProps.height / stage.height());
        return { x, y };
      });
    };

    // Draw all lines in white
    regions.forEach((region) => {
      const transformedPoints = transformPoints(region.points);

      const whiteLine = new Konva.Line({
        points: transformedPoints.flatMap((p) => [p.x, p.y]),
        stroke: "white",
        fill: "white",
        strokeWidth: 2,
        lineCap: "round",
        lineJoin: "round",
        closed: true,
      });

      layer.add(whiteLine);
    });

    // Export the temporary stage to a data URL
    const maskUrl = tempStage.toDataURL({
      mimeType: "image/png",
      pixelRatio: 1,
      quality: 0.2,
    });

    const imageUrl = imageRef.current.toDataURL({
      mimeType: "image/png",
      pixelRatio: 1,
      quality: 0.2,
    });

    // download(maskUrl);
    // download(imageUrl!);

    const genImage = await generateImage(imageUrl!, maskUrl, inputValue);
    console.log("genImage", genImage);
    setNewImage(genImage);
    setIsLoading(false);
  };

  return (
    <div className={`h-screen flex items-center justify-center bg-white`}>
      <main className={"flex flex-col gap-2 items-center justify-center"}>
        {exported && (
          <div className={"border-2 border-black rounded-sm max-w-400"}>
            <img src={exported} className={"rounded-sm"} />
          </div>
        )}
        <div className={"border-2 border-black rounded-sm"}>
          <Stage width={600} height={400} ref={stageRef}>
            <Layer>
              <Image
                image={image}
                x={imageProps.x}
                y={imageProps.y}
                width={imageProps.width}
                height={imageProps.height}
                ref={imageRef}
                onMouseDown={(e) => {
                  setIsDrawing(true);
                  const point = getRelativePointerPosition(e.target.getStage());
                  const region = {
                    id: crypto.randomUUID(),
                    points: [point],
                  };
                  setRegions(regions.concat([region]));
                  console.log("regions", regions);
                }}
                onMouseMove={(e) => {
                  if (!isDrawing) {
                    return;
                  }
                  const lastRegion = { ...regions[regions.length - 1] };

                  const point = getRelativePointerPosition(e.target.getStage());
                  lastRegion.points = lastRegion.points.concat([point]);
                  regions.splice(regions.length - 1, 1);
                  setRegions(regions.concat([lastRegion]));
                }}
                onMouseUp={(e) => {
                  setIsDrawing(false);
                  const lastRegion = regions[regions.length - 1];

                  if (lastRegion.points.length < 3) {
                    regions.splice(regions.length - 1, 1);
                    setRegions(regions.concat());
                  }
                }}
              ></Image>
            </Layer>
            <Layer>
              {regions.map((region) => {
                const isSelected = region.id === selectedId;
                return (
                  <React.Fragment key={region.id}>
                    {/* first we need to erase previous drawings */}
                    {/* we can do it with  destination-out blend mode */}
                    <Line
                      globalCompositeOperation="destination-out"
                      points={region.points.flatMap((p) => [p.x, p.y])}
                      fill="black"
                      listening={false}
                      closed
                    />
                    {/* then we just draw new region */}
                    <Line
                      name="region"
                      fill={"#ff0e0e"}
                      globalCompositeOperation={"source-over"}
                      points={region.points.flatMap((p) => [p.x, p.y])}
                      closed
                      opacity={0.5}
                    />
                  </React.Fragment>
                );
              })}
            </Layer>
          </Stage>
        </div>
        <Input
          ref={inputRef}
          placeholder={"Enter prompt"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button size={"sm"} onClick={undo}>
          Undo
        </Button>
        <Button isLoading={isLoading} onClick={handleExport}>
          Generate
        </Button>
      </main>
    </div>
  );
};
