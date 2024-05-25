"use client";

import { FC } from "react";
import { BgColor, All } from "@/lib/backgrounds";

type Props = {
  onChange: (color: BgColor) => void;
};

export const ColorSelector: FC<Props> = ({ onChange }) => {
  return (
    <div className={"flex gap-2 items-center justify-center"}>
      {All.map((color) => (
        <div
          onClick={() => onChange(color)}
          className={`w-7 h-7 border-2 border-black rounded-full ${color.tailwind} cursor-pointer`}
        ></div>
      ))}
    </div>
  );
};
