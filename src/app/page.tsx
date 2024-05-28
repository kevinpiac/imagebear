"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@/components/CanvasEditor"), {
  ssr: false,
});

export default function Home() {
  return <Canvas />;
}
