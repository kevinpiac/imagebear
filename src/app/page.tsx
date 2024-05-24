"use client";

import Dropzone from "react-dropzone";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Stage, Group, Image, Text, Layer, Line } from "react-konva";
import { CanvasImage } from "@/components/CanvasImage";
import { generateImage } from "@/app/actions";
import { Input } from "@/components/ui/input";
import Konva from "konva";
import { useWritable } from "react-use-svelte-store";
import { Region, regionStore } from "@/store";
import useImage from "use-image";

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

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  const stageRef = useRef();
  const initialId = crypto.randomUUID();

  const [regions, setRegions] = useWritable<Region[]>(regionStore);

  const handleImage = async (files: File[]) => {
    const image = files[0];

    if (!image) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async (rd) => {
      console.log("DATA URL", rd.target?.result);
      setDataUrl(rd.target?.result as string);
    };

    reader.readAsDataURL(image);
    setIsDragging(false);
  };

  if (dataUrl) {
    return <CanvasImage src={dataUrl} />;
  }

  return (
    <Dropzone
      onDrop={(acceptedFiles) => {}}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDropRejected={() => setIsDragging(false)}
      onDropAccepted={handleImage}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`h-screen flex items-center justify-center bg-white ${isUploading && "animated-background"}`}
        >
          {isDragging && (
            <div
              className={
                "bg-gray-50/90 fixed top-0 left-0 bottom-0 right-0 z-50 p-10"
              }
            >
              <div
                className={
                  "border-dashed border-4 border-black p-10 flex items-center justify-center h-full w-full rounded-2xl"
                }
              >
                <h1 className={"text-4xl text-black font-bold"}>
                  Drop your file anywhere
                </h1>
              </div>
            </div>
          )}
          <main className={"flex flex-col gap-2 items-center justify-center"}>
            <div className={"border-2 border-black rounded-sm"}>
              <Stage width={600} height={400}>
                {dataUrl && <CanvasImage src={dataUrl}></CanvasImage>}
              </Stage>
            </div>
            <Button>Upload your image</Button>
          </main>
        </div>
      )}
    </Dropzone>
  );
}
