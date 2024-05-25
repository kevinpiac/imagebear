export type BgColor = {
  tailwind: string;
  konva: (string | number)[];
};

export const Holly = {
  tailwind: "bg-gradient-to-r from-blue-200 to-cyan-200",
  konva: [
    0,
    "#BFDBFE", // from-blue-200
    1,
    "#A5F3FC", // to-cyan-200
  ],
};

export const NorthenLights = {
  tailwind: "bg-gradient-to-r from-teal-200 to-teal-500",
  konva: [
    0,
    "#A7F3D0", // from-teal-200
    1,
    "#14B8A6", // to-teal-500
  ],
};

export const Snowflake = {
  tailwind: "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
  konva: [
    0,
    "#D946EF", // from-fuchsia-500
    1,
    "#06B6D4", // to-cyan-500
  ],
};

export const ClearNight = {
  tailwind: "bg-gradient-to-r from-blue-800 to-indigo-900",
  konva: [
    0,
    "#1E40AF", // from-blue-800
    1,
    "#312E81", // to-indigo-900
  ],
};

export const Soil = {
  tailwind: "bg-gradient-to-r from-stone-500 to-stone-700",
  konva: [
    0,
    "#78716C", // from-stone-500
    1,
    "#57534E", // to-stone-700
  ],
};

export const Metal = {
  tailwind: "bg-gradient-to-r from-slate-500 to-slate-800",
  konva: [
    0,
    "#64748B", // from-slate-500
    1,
    "#1E293B", // to-slate-800
  ],
};

export const Darkness = {
  tailwind: "bg-gradient-to-r from-slate-900 to-slate-700",
  konva: [
    0,
    "#0F172A", // from-slate-900
    1,
    "#334155", // to-slate-700
  ],
};

export const Twilight = {
  tailwind: "bg-gradient-to-r from-amber-500 to-pink-500",
  konva: [
    0,
    "#F59E0B", // from-amber-500
    1,
    "#EC4899", // to-pink-500
  ],
};

export const Sunshine = {
  tailwind: "bg-gradient-to-r from-amber-200 to-yellow-400",
  konva: [
    0,
    "#FDE68A", // from-amber-200
    1,
    "#FACC15", // to-yellow-400
  ],
};

export const Poppy = {
  tailwind: "bg-gradient-to-r from-rose-400 to-red-500",
  konva: [
    0,
    "#FB7185", // from-rose-400
    1,
    "#EF4444", // to-red-500
  ],
};

export const All: BgColor[] = [
  Holly,
  NorthenLights,
  Snowflake,
  ClearNight,
  Soil,
  Metal,
  Darkness,
  Twilight,
  Sunshine,
  Poppy,
];
