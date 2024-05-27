"use client";

import useImage from "use-image";
import { FC, useEffect, useRef, useState } from "react";
import { Image, Layer, Line, Stage, Rect, Group } from "react-konva";
import React from "react";
import { useWritable } from "react-use-svelte-store";
import { Region, regionStore, resetRegions } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Konva from "konva";
import { generateImage, removeBackground } from "@/app/actions";
import { rejects } from "assert";
import { ColorSelector } from "@/components/ColorSelector";
import { BgColor } from "@/lib/backgrounds";
import { PhotoIcon } from "@heroicons/react/16/solid";

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
  const bgLayerRef = useRef<Konva.Layer>(null);

  useEffect(() => {
    if (dataUrl) {
      loadImage(dataUrl).then((img) => {
        console.log("img", img);
        setImage(img);
      });
    }
  }, [dataUrl]);

  const stageRef = useRef<Konva.Stage>();
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

  const removeBg = async () => {
    const image = await removeBackground(dataUrl);
    setNewImage(image);
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
      pixelRatio: 2,
      quality: 1,
    });

    const imageUrl = await generateImageFromStage();

    if (!imageUrl) {
      throw new Error("No image url");
    }

    const genImage = await generateImage(imageUrl!, maskUrl, inputValue);
    console.log("genImage", genImage);
    setNewImage(genImage);
    setIsLoading(false);
  };

  const downloadImage = async () => {
    if (!dataUrl) {
      return;
    }

    download(dataUrl);
    const stageImage = await generateImageFromStage();
    download(stageImage!);
  };

  const generateImageFromStage = async () => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const dataUrl = stage.toDataURL({
      mimeType: "image/png",
      pixelRatio: 2,
      quality: 1,
    });

    return dataUrl;
  };

  const addBgColor = (color: BgColor) => {
    let layer = bgLayerRef.current;

    if (!layer) {
      return;
    }

    layer.destroyChildren();

    const stage = stageRef.current;
    const background = new Konva.Rect({
      x: 0,
      y: 0,
      width: stage.width(),
      height: stage.height(),
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: stage.width(), y: stage.height() },
      // gradient into transparent color, so we can see CSS styles
      fillLinearGradientColorStops: color.konva,
      // remove background from hit graph for better perf
      // because we don't need any events on the background
      listening: false,
    });
    layer.add(background);
    layer.moveToBottom();
  };

  return (
    <div
      className={
        "h-screen flex flex-col bg-gradient-to-r from-slate-900 to-slate-700"
      }
    >
      <div className={"h-20"}></div>
      <div className={`grow grid grid-cols-12 gap-10 p-10`}>
        <aside
          className={
            "col-span-3 border border-slate-700 rounded-xl p-5 shadow-[5px_5px_0_#000]"
          }
        >
          <ColorSelector onChange={(color) => addBgColor(color)} />
        </aside>
        <main
          className={
            "flex flex-col gap-2 items-center justify-center col-span-6"
          }
        >
          <Button size={"sm"} onClick={removeBg} className={"rounded-full"}>
            <PhotoIcon className={"w-6 h-6 mr-2"}></PhotoIcon>
            Remove background
          </Button>

          <div className={"border-2 border-black rounded-3xl overflow-hidden"}>
            <Stage width={600} height={400} ref={stageRef}>
              <Layer ref={bgLayerRef}></Layer>
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
                    const point = getRelativePointerPosition(
                      e.target.getStage(),
                    );
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

                    const point = getRelativePointerPosition(
                      e.target.getStage(),
                    );
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
          <div className={"w-[500px]"}>
            <Input
              ref={inputRef}
              placeholder={"Enter prompt"}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <Button size={"sm"} onClick={undo}>
            Undo
          </Button>

          <Button size={"sm"} onClick={downloadImage}>
            Download
          </Button>
          <Button isLoading={isLoading} onClick={handleExport}>
            Generate
          </Button>
        </main>
        <aside className={"col-span-3"}></aside>
      </div>
    </div>
  );
};
