"use client";

import React, { FC, PropsWithChildren, useState } from "react";
import { BgColor, AllGradients, AllSolid } from "@/lib/backgrounds";

type Props = {
  onChange: (color: BgColor) => void;
};

const TabButton: FC<
  PropsWithChildren & { selected: boolean; onClick: () => void }
> = ({ children, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-full px-4 py-1 text-sm text-white cursor-pointer ${selected ? "bg-neutral-900" : ""}`}
    >
      {children}
    </div>
  );
};

export const ColorSelector: FC<Props> = ({ onChange }) => {
  const [selectedTab, setSelectedTab] = useState<"gradients" | "solid" | "ai">(
    "gradients",
  );

  return (
    <div className={" gap-3 flex flex-col max-h-full overflow-hidden"}>
      <div
        className={
          "rounded-full p-1 flex items-center bg-neutral-800 border border-neutral-700 gap-1 antialiased w-max m-auto"
        }
      >
        <TabButton
          onClick={() => setSelectedTab("gradients")}
          selected={selectedTab === "gradients"}
        >
          Gradients
        </TabButton>
        <TabButton
          onClick={() => setSelectedTab("solid")}
          selected={selectedTab === "solid"}
        >
          Solid
        </TabButton>
      </div>
      <div
        className={
          "grid grid-cols-2 gap-4 items-center justify-center rounded-xl p-5 shadow-2xl bg-black overflow-y-auto shadow-2xl"
        }
      >
        {selectedTab === "gradients" && (
          <>
            {AllGradients.map((color) => (
              <div
                key={color.tailwind}
                onClick={() => onChange(color)}
                className={`h-16 border-1 border-[#343839] rounded-2xl ${color.tailwind} cursor-pointer hover:scale-95 hover:shadow-2xl transition-all`}
              ></div>
            ))}
          </>
        )}

        {selectedTab === "solid" && (
          <>
            {AllSolid.map((color) => (
              <div
                key={color.tailwind}
                onClick={() => onChange(color)}
                className={`h-16 border-1 border-[#343839] rounded-2xl ${color.tailwind} cursor-pointer hover:scale-95 hover:shadow-2xl transition-all`}
              ></div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
