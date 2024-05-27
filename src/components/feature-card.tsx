import React, { FC, PropsWithChildren } from "react";

export const FeatureCard: FC<
  PropsWithChildren & {
    title: string;
    redGlowing?: boolean;
  }
> = ({ title, children, redGlowing }) => {
  if (redGlowing) {
    return (
      <div className={"flex relative w-full"}>
        <div
          className={
            "bg-gradient-to-r from-rose-400 to-violet-700 absolute left-3 right-3 bottom-3 top-3 blur-lg rounded-2xl animate-pulse z-0"
          }
        ></div>
        <div
          className={`p-3 border border-[#232E3F] bg-[#020816] rounded-2xl z-20 w-full`}
        >
          <div className={"text-white text-sm antialiased mb-4"}>{title}</div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-3 border border-[#232E3F] bg-[#020816] rounded-2xl`}>
      <div className={"text-white text-sm antialiased mb-4"}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
