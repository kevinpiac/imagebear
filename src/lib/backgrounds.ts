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

export const AllGradients: BgColor[] = [
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

export const AllSolid: BgColor[] = [
  {
    tailwind: "bg-slate-50",
    konva: [0, "#f8fafc"],
  },
  {
    tailwind: "bg-slate-100",
    konva: [0, "#f1f5f9"],
  },
  {
    tailwind: "bg-slate-200",
    konva: [0, "#e2e8f0"],
  },
  {
    tailwind: "bg-slate-300",
    konva: [0, "#cbd5e1"],
  },
  {
    tailwind: "bg-slate-400",
    konva: [0, "#94a3b8"],
  },
  {
    tailwind: "bg-slate-500",
    konva: [0, "#64748b"],
  },
  {
    tailwind: "bg-slate-600",
    konva: [0, "#475569"],
  },
  {
    tailwind: "bg-slate-700",
    konva: [0, "#334155"],
  },
  {
    tailwind: "bg-slate-800",
    konva: [0, "#1e293b"],
  },
  {
    tailwind: "bg-slate-900",
    konva: [0, "#0f172a"],
  },
  {
    tailwind: "bg-slate-950",
    konva: [0, "#020617"],
  },
  {
    tailwind: "bg-gray-400",
    konva: [0, "#9ca3af"],
  },
  {
    tailwind: "bg-gray-500",
    konva: [0, "#6b7280"],
  },
  {
    tailwind: "bg-gray-600",
    konva: [0, "#4b5563"],
  },
  {
    tailwind: "bg-gray-700",
    konva: [0, "#374151"],
  },
  {
    tailwind: "bg-gray-800",
    konva: [0, "#1f2937"],
  },
  {
    tailwind: "bg-gray-900",
    konva: [0, "#111827"],
  },
  {
    tailwind: "bg-gray-950",
    konva: [0, "#030712"],
  },
  {
    tailwind: "bg-zinc-500",
    konva: [0, "#71717a"],
  },
  {
    tailwind: "bg-zinc-600",
    konva: [0, "#52525b"],
  },
  {
    tailwind: "bg-zinc-700",
    konva: [0, "#3f3f46"],
  },
  {
    tailwind: "bg-zinc-800",
    konva: [0, "#27272a"],
  },
  {
    tailwind: "bg-zinc-900",
    konva: [0, "#18181b"],
  },
  {
    tailwind: "bg-zinc-950",
    konva: [0, "#09090b"],
  },
  {
    tailwind: "bg-neutral-400",
    konva: [0, "#a3a3a3"],
  },
  {
    tailwind: "bg-neutral-500",
    konva: [0, "#737373"],
  },
  {
    tailwind: "bg-neutral-600",
    konva: [0, "#525252"],
  },
  {
    tailwind: "bg-neutral-700",
    konva: [0, "#404040"],
  },
  {
    tailwind: "bg-neutral-800",
    konva: [0, "#262626"],
  },
  {
    tailwind: "bg-neutral-900",
    konva: [0, "#171717"],
  },
  {
    tailwind: "bg-neutral-950",
    konva: [0, "#0a0a0a"],
  },
  {
    tailwind: "bg-stone-400",
    konva: [0, "#a8a29e"],
  },
  {
    tailwind: "bg-stone-500",
    konva: [0, "#78716c"],
  },
  {
    tailwind: "bg-stone-600",
    konva: [0, "#57534e"],
  },
  {
    tailwind: "bg-stone-700",
    konva: [0, "#44403c"],
  },
  {
    tailwind: "bg-stone-800",
    konva: [0, "#292524"],
  },
  {
    tailwind: "bg-stone-900",
    konva: [0, "#1c1917"],
  },
  {
    tailwind: "bg-stone-950",
    konva: [0, "#0c0a09"],
  },
  {
    tailwind: "bg-red-300",
    konva: [0, "#fca5a5"],
  },
  {
    tailwind: "bg-red-400",
    konva: [0, "#f87171"],
  },
  {
    tailwind: "bg-red-500",
    konva: [0, "#ef4444"],
  },
  {
    tailwind: "bg-red-600",
    konva: [0, "#dc2626"],
  },
  {
    tailwind: "bg-red-700",
    konva: [0, "#b91c1c"],
  },
  {
    tailwind: "bg-red-800",
    konva: [0, "#991b1b"],
  },
  {
    tailwind: "bg-red-900",
    konva: [0, "#7f1d1d"],
  },
  {
    tailwind: "bg-red-950",
    konva: [0, "#450a0a"],
  },
  {
    tailwind: "bg-orange-200",
    konva: [0, "#fed7aa"],
  },
  {
    tailwind: "bg-orange-300",
    konva: [0, "#fdba74"],
  },
  {
    tailwind: "bg-orange-400",
    konva: [0, "#fb923c"],
  },
  {
    tailwind: "bg-orange-500",
    konva: [0, "#f97316"],
  },
  {
    tailwind: "bg-orange-600",
    konva: [0, "#ea580c"],
  },
  {
    tailwind: "bg-orange-700",
    konva: [0, "#c2410c"],
  },
  {
    tailwind: "bg-orange-800",
    konva: [0, "#9a3412"],
  },
  {
    tailwind: "bg-orange-900",
    konva: [0, "#7c2d12"],
  },
  {
    tailwind: "bg-orange-950",
    konva: [0, "#431407"],
  },
  {
    tailwind: "bg-amber-200",
    konva: [0, "#fde68a"],
  },
  {
    tailwind: "bg-amber-300",
    konva: [0, "#fcd34d"],
  },
  {
    tailwind: "bg-amber-400",
    konva: [0, "#fbbf24"],
  },
  {
    tailwind: "bg-amber-500",
    konva: [0, "#f59e0b"],
  },
  {
    tailwind: "bg-amber-600",
    konva: [0, "#d97706"],
  },
  {
    tailwind: "bg-amber-700",
    konva: [0, "#b45309"],
  },
  {
    tailwind: "bg-amber-800",
    konva: [0, "#92400e"],
  },
  {
    tailwind: "bg-amber-900",
    konva: [0, "#78350f"],
  },
  {
    tailwind: "bg-amber-950",
    konva: [0, "#451a03"],
  },
  {
    tailwind: "bg-yellow-200",
    konva: [0, "#fef08a"],
  },
  {
    tailwind: "bg-yellow-300",
    konva: [0, "#fde047"],
  },
  {
    tailwind: "bg-yellow-400",
    konva: [0, "#facc15"],
  },
  {
    tailwind: "bg-yellow-500",
    konva: [0, "#eab308"],
  },
  {
    tailwind: "bg-yellow-600",
    konva: [0, "#ca8a04"],
  },
  {
    tailwind: "bg-yellow-700",
    konva: [0, "#a16207"],
  },
  {
    tailwind: "bg-yellow-800",
    konva: [0, "#854d0e"],
  },
  {
    tailwind: "bg-yellow-900",
    konva: [0, "#713f12"],
  },
  {
    tailwind: "bg-yellow-950",
    konva: [0, "#422006"],
  },
  {
    tailwind: "bg-lime-50",
    konva: [0, "#f7fee7"],
  },
  {
    tailwind: "bg-lime-100",
    konva: [0, "#ecfccb"],
  },
  {
    tailwind: "bg-lime-200",
    konva: [0, "#d9f99d"],
  },
  {
    tailwind: "bg-lime-300",
    konva: [0, "#bef264"],
  },
  {
    tailwind: "bg-lime-400",
    konva: [0, "#a3e635"],
  },
  {
    tailwind: "bg-lime-500",
    konva: [0, "#84cc16"],
  },
  {
    tailwind: "bg-lime-600",
    konva: [0, "#65a30d"],
  },
  {
    tailwind: "bg-lime-700",
    konva: [0, "#4d7c0f"],
  },
  {
    tailwind: "bg-lime-800",
    konva: [0, "#3f6212"],
  },
  {
    tailwind: "bg-lime-900",
    konva: [0, "#365314"],
  },
  {
    tailwind: "bg-lime-950",
    konva: [0, "#1a2e05"],
  },
  {
    tailwind: "bg-green-50",
    konva: [0, "#f0fdf4"],
  },
  {
    tailwind: "bg-green-100",
    konva: [0, "#dcfce7"],
  },
  {
    tailwind: "bg-green-200",
    konva: [0, "#bbf7d0"],
  },
  {
    tailwind: "bg-green-300",
    konva: [0, "#86efac"],
  },
  {
    tailwind: "bg-green-400",
    konva: [0, "#4ade80"],
  },
  {
    tailwind: "bg-green-500",
    konva: [0, "#22c55e"],
  },
  {
    tailwind: "bg-green-600",
    konva: [0, "#16a34a"],
  },
  {
    tailwind: "bg-green-700",
    konva: [0, "#15803d"],
  },
  {
    tailwind: "bg-green-800",
    konva: [0, "#166534"],
  },
  {
    tailwind: "bg-green-900",
    konva: [0, "#14532d"],
  },
  {
    tailwind: "bg-green-950",
    konva: [0, "#052e16"],
  },
  {
    tailwind: "bg-emerald-50",
    konva: [0, "#ecfdf5"],
  },
  {
    tailwind: "bg-emerald-100",
    konva: [0, "#d1fae5"],
  },
  {
    tailwind: "bg-emerald-200",
    konva: [0, "#a7f3d0"],
  },
  {
    tailwind: "bg-emerald-300",
    konva: [0, "#6ee7b7"],
  },
  {
    tailwind: "bg-emerald-400",
    konva: [0, "#34d399"],
  },
  {
    tailwind: "bg-emerald-500",
    konva: [0, "#10b981"],
  },
  {
    tailwind: "bg-emerald-600",
    konva: [0, "#059669"],
  },
  {
    tailwind: "bg-emerald-700",
    konva: [0, "#047857"],
  },
  {
    tailwind: "bg-emerald-800",
    konva: [0, "#065f46"],
  },
  {
    tailwind: "bg-emerald-900",
    konva: [0, "#064e3b"],
  },
  {
    tailwind: "bg-emerald-950",
    konva: [0, "#022c22"],
  },
  {
    tailwind: "bg-teal-50",
    konva: [0, "#f0fdfa"],
  },
  {
    tailwind: "bg-teal-100",
    konva: [0, "#ccfbf1"],
  },
  {
    tailwind: "bg-teal-200",
    konva: [0, "#99f6e4"],
  },
  {
    tailwind: "bg-teal-300",
    konva: [0, "#5eead4"],
  },
  {
    tailwind: "bg-teal-400",
    konva: [0, "#2dd4bf"],
  },
  {
    tailwind: "bg-teal-500",
    konva: [0, "#14b8a6"],
  },
  {
    tailwind: "bg-teal-600",
    konva: [0, "#0d9488"],
  },
  {
    tailwind: "bg-teal-700",
    konva: [0, "#0f766e"],
  },
  {
    tailwind: "bg-teal-800",
    konva: [0, "#115e59"],
  },
  {
    tailwind: "bg-teal-900",
    konva: [0, "#134e4a"],
  },
  {
    tailwind: "bg-teal-950",
    konva: [0, "#042f2e"],
  },
  {
    tailwind: "bg-cyan-50",
    konva: [0, "#ecfeff"],
  },
  {
    tailwind: "bg-cyan-100",
    konva: [0, "#cffafe"],
  },
  {
    tailwind: "bg-cyan-200",
    konva: [0, "#a5f3fc"],
  },
  {
    tailwind: "bg-cyan-300",
    konva: [0, "#67e8f9"],
  },
  {
    tailwind: "bg-cyan-400",
    konva: [0, "#22d3ee"],
  },
  {
    tailwind: "bg-cyan-500",
    konva: [0, "#06b6d4"],
  },
  {
    tailwind: "bg-cyan-600",
    konva: [0, "#0891b2"],
  },
  {
    tailwind: "bg-cyan-700",
    konva: [0, "#0e7490"],
  },
  {
    tailwind: "bg-cyan-800",
    konva: [0, "#155e75"],
  },
  {
    tailwind: "bg-cyan-900",
    konva: [0, "#164e63"],
  },
  {
    tailwind: "bg-cyan-950",
    konva: [0, "#083344"],
  },
  {
    tailwind: "bg-sky-300",
    konva: [0, "#7dd3fc"],
  },
  {
    tailwind: "bg-sky-400",
    konva: [0, "#38bdf8"],
  },
  {
    tailwind: "bg-sky-500",
    konva: [0, "#0ea5e9"],
  },
  {
    tailwind: "bg-sky-600",
    konva: [0, "#0284c7"],
  },
  {
    tailwind: "bg-sky-700",
    konva: [0, "#0369a1"],
  },
  {
    tailwind: "bg-sky-800",
    konva: [0, "#075985"],
  },
  {
    tailwind: "bg-sky-900",
    konva: [0, "#0c4a6e"],
  },
  {
    tailwind: "bg-sky-950",
    konva: [0, "#082f49"],
  },
  {
    tailwind: "bg-blue-300",
    konva: [0, "#93c5fd"],
  },
  {
    tailwind: "bg-blue-400",
    konva: [0, "#60a5fa"],
  },
  {
    tailwind: "bg-blue-500",
    konva: [0, "#3b82f6"],
  },
  {
    tailwind: "bg-blue-600",
    konva: [0, "#2563eb"],
  },
  {
    tailwind: "bg-blue-700",
    konva: [0, "#1d4ed8"],
  },
  {
    tailwind: "bg-blue-800",
    konva: [0, "#1e40af"],
  },
  {
    tailwind: "bg-blue-900",
    konva: [0, "#1e3a8a"],
  },
  {
    tailwind: "bg-blue-950",
    konva: [0, "#172554"],
  },
  {
    tailwind: "bg-indigo-300",
    konva: [0, "#a5b4fc"],
  },
  {
    tailwind: "bg-indigo-400",
    konva: [0, "#818cf8"],
  },
  {
    tailwind: "bg-indigo-500",
    konva: [0, "#6366f1"],
  },
  {
    tailwind: "bg-indigo-600",
    konva: [0, "#4f46e5"],
  },
  {
    tailwind: "bg-indigo-700",
    konva: [0, "#4338ca"],
  },
  {
    tailwind: "bg-indigo-800",
    konva: [0, "#3730a3"],
  },
  {
    tailwind: "bg-indigo-900",
    konva: [0, "#312e81"],
  },
  {
    tailwind: "bg-indigo-950",
    konva: [0, "#1e1b4b"],
  },
  {
    tailwind: "bg-violet-300",
    konva: [0, "#c4b5fd"],
  },
  {
    tailwind: "bg-violet-400",
    konva: [0, "#a78bfa"],
  },
  {
    tailwind: "bg-violet-500",
    konva: [0, "#8b5cf6"],
  },
  {
    tailwind: "bg-violet-600",
    konva: [0, "#7c3aed"],
  },
  {
    tailwind: "bg-violet-700",
    konva: [0, "#6d28d9"],
  },
  {
    tailwind: "bg-violet-800",
    konva: [0, "#5b21b6"],
  },
  {
    tailwind: "bg-violet-900",
    konva: [0, "#4c1d95"],
  },
  {
    tailwind: "bg-violet-950",
    konva: [0, "#2e1065"],
  },
  {
    tailwind: "bg-purple-300",
    konva: [0, "#d8b4fe"],
  },
  {
    tailwind: "bg-purple-400",
    konva: [0, "#c084fc"],
  },
  {
    tailwind: "bg-purple-500",
    konva: [0, "#a855f7"],
  },
  {
    tailwind: "bg-purple-600",
    konva: [0, "#9333ea"],
  },
  {
    tailwind: "bg-purple-700",
    konva: [0, "#7e22ce"],
  },
  {
    tailwind: "bg-purple-800",
    konva: [0, "#6b21a8"],
  },
  {
    tailwind: "bg-purple-900",
    konva: [0, "#581c87"],
  },
  {
    tailwind: "bg-purple-950",
    konva: [0, "#3b0764"],
  },
  {
    tailwind: "bg-fuchsia-300",
    konva: [0, "#f0abfc"],
  },
  {
    tailwind: "bg-fuchsia-400",
    konva: [0, "#e879f9"],
  },
  {
    tailwind: "bg-fuchsia-500",
    konva: [0, "#d946ef"],
  },
  {
    tailwind: "bg-fuchsia-600",
    konva: [0, "#c026d3"],
  },
  {
    tailwind: "bg-fuchsia-700",
    konva: [0, "#a21caf"],
  },
  {
    tailwind: "bg-fuchsia-800",
    konva: [0, "#86198f"],
  },
  {
    tailwind: "bg-fuchsia-900",
    konva: [0, "#701a75"],
  },
  {
    tailwind: "bg-fuchsia-950",
    konva: [0, "#4a044e"],
  },
  {
    tailwind: "bg-pink-300",
    konva: [0, "#f9a8d4"],
  },
  {
    tailwind: "bg-pink-400",
    konva: [0, "#f472b6"],
  },
  {
    tailwind: "bg-pink-500",
    konva: [0, "#ec4899"],
  },
  {
    tailwind: "bg-pink-600",
    konva: [0, "#db2777"],
  },
  {
    tailwind: "bg-pink-700",
    konva: [0, "#be185d"],
  },
  {
    tailwind: "bg-pink-800",
    konva: [0, "#9d174d"],
  },
  {
    tailwind: "bg-pink-900",
    konva: [0, "#831843"],
  },
  {
    tailwind: "bg-pink-950",
    konva: [0, "#500724"],
  },
  {
    tailwind: "bg-rose-300",
    konva: [0, "#fda4af"],
  },
  {
    tailwind: "bg-rose-400",
    konva: [0, "#fb7185"],
  },
  {
    tailwind: "bg-rose-500",
    konva: [0, "#f43f5e"],
  },
  {
    tailwind: "bg-rose-600",
    konva: [0, "#e11d48"],
  },
  {
    tailwind: "bg-rose-700",
    konva: [0, "#be123c"],
  },
  {
    tailwind: "bg-rose-800",
    konva: [0, "#9f1239"],
  },
  {
    tailwind: "bg-rose-900",
    konva: [0, "#881337"],
  },
  {
    tailwind: "bg-rose-950",
    konva: [0, "#4c0519"],
  },
  {
    tailwind: "bg-cyan-300",
    konva: [0, "#67e8f9"],
  },
  {
    tailwind: "bg-cyan-400",
    konva: [0, "#22d3ee"],
  },
  {
    tailwind: "bg-cyan-500",
    konva: [0, "#06b6d4"],
  },
  {
    tailwind: "bg-cyan-600",
    konva: [0, "#0891b2"],
  },
  {
    tailwind: "bg-cyan-700",
    konva: [0, "#0e7490"],
  },
  {
    tailwind: "bg-cyan-800",
    konva: [0, "#155e75"],
  },
  {
    tailwind: "bg-cyan-900",
    konva: [0, "#164e63"],
  },
  {
    tailwind: "bg-cyan-950",
    konva: [0, "#083344"],
  },
  {
    tailwind: "bg-sky-300",
    konva: [0, "#7dd3fc"],
  },
  {
    tailwind: "bg-sky-400",
    konva: [0, "#38bdf8"],
  },
  {
    tailwind: "bg-sky-500",
    konva: [0, "#0ea5e9"],
  },
  {
    tailwind: "bg-sky-600",
    konva: [0, "#0284c7"],
  },
  {
    tailwind: "bg-sky-700",
    konva: [0, "#0369a1"],
  },
  {
    tailwind: "bg-sky-800",
    konva: [0, "#075985"],
  },
  {
    tailwind: "bg-sky-900",
    konva: [0, "#0c4a6e"],
  },
  {
    tailwind: "bg-sky-950",
    konva: [0, "#082f49"],
  },
  {
    tailwind: "bg-blue-300",
    konva: [0, "#93c5fd"],
  },
  {
    tailwind: "bg-blue-400",
    konva: [0, "#60a5fa"],
  },
  {
    tailwind: "bg-blue-500",
    konva: [0, "#3b82f6"],
  },
  {
    tailwind: "bg-blue-600",
    konva: [0, "#2563eb"],
  },
  {
    tailwind: "bg-blue-700",
    konva: [0, "#1d4ed8"],
  },
  {
    tailwind: "bg-blue-800",
    konva: [0, "#1e40af"],
  },
  {
    tailwind: "bg-blue-900",
    konva: [0, "#1e3a8a"],
  },
  {
    tailwind: "bg-blue-950",
    konva: [0, "#172554"],
  },
  {
    tailwind: "bg-indigo-300",
    konva: [0, "#a5b4fc"],
  },
  {
    tailwind: "bg-indigo-400",
    konva: [0, "#818cf8"],
  },
  {
    tailwind: "bg-indigo-500",
    konva: [0, "#6366f1"],
  },
  {
    tailwind: "bg-indigo-600",
    konva: [0, "#4f46e5"],
  },
  {
    tailwind: "bg-indigo-700",
    konva: [0, "#4338ca"],
  },
  {
    tailwind: "bg-indigo-800",
    konva: [0, "#3730a3"],
  },
  {
    tailwind: "bg-indigo-900",
    konva: [0, "#312e81"],
  },
  {
    tailwind: "bg-indigo-950",
    konva: [0, "#1e1b4b"],
  },
  {
    tailwind: "bg-violet-300",
    konva: [0, "#c4b5fd"],
  },
  {
    tailwind: "bg-violet-400",
    konva: [0, "#a78bfa"],
  },
  {
    tailwind: "bg-violet-500",
    konva: [0, "#8b5cf6"],
  },
  {
    tailwind: "bg-violet-600",
    konva: [0, "#7c3aed"],
  },
  {
    tailwind: "bg-violet-700",
    konva: [0, "#6d28d9"],
  },
  {
    tailwind: "bg-violet-800",
    konva: [0, "#5b21b6"],
  },
  {
    tailwind: "bg-violet-900",
    konva: [0, "#4c1d95"],
  },
  {
    tailwind: "bg-violet-950",
    konva: [0, "#2e1065"],
  },
  {
    tailwind: "bg-purple-300",
    konva: [0, "#d8b4fe"],
  },
  {
    tailwind: "bg-purple-400",
    konva: [0, "#c084fc"],
  },
  {
    tailwind: "bg-purple-500",
    konva: [0, "#a855f7"],
  },
  {
    tailwind: "bg-purple-600",
    konva: [0, "#9333ea"],
  },
  {
    tailwind: "bg-purple-700",
    konva: [0, "#7e22ce"],
  },
  {
    tailwind: "bg-purple-800",
    konva: [0, "#6b21a8"],
  },
  {
    tailwind: "bg-purple-900",
    konva: [0, "#581c87"],
  },
  {
    tailwind: "bg-purple-950",
    konva: [0, "#3b0764"],
  },
  {
    tailwind: "bg-fuchsia-300",
    konva: [0, "#f0abfc"],
  },
  {
    tailwind: "bg-fuchsia-400",
    konva: [0, "#e879f9"],
  },
  {
    tailwind: "bg-fuchsia-500",
    konva: [0, "#d946ef"],
  },
  {
    tailwind: "bg-fuchsia-600",
    konva: [0, "#c026d3"],
  },
  {
    tailwind: "bg-fuchsia-700",
    konva: [0, "#a21caf"],
  },
  {
    tailwind: "bg-fuchsia-800",
    konva: [0, "#86198f"],
  },
  {
    tailwind: "bg-fuchsia-900",
    konva: [0, "#701a75"],
  },
  {
    tailwind: "bg-fuchsia-950",
    konva: [0, "#4a044e"],
  },
  {
    tailwind: "bg-pink-300",
    konva: [0, "#f9a8d4"],
  },
  {
    tailwind: "bg-pink-400",
    konva: [0, "#f472b6"],
  },
  {
    tailwind: "bg-pink-500",
    konva: [0, "#ec4899"],
  },
  {
    tailwind: "bg-pink-600",
    konva: [0, "#db2777"],
  },
  {
    tailwind: "bg-pink-700",
    konva: [0, "#be185d"],
  },
  {
    tailwind: "bg-pink-800",
    konva: [0, "#9d174d"],
  },
  {
    tailwind: "bg-pink-900",
    konva: [0, "#831843"],
  },
  {
    tailwind: "bg-pink-950",
    konva: [0, "#500724"],
  },
  {
    tailwind: "bg-rose-300",
    konva: [0, "#fda4af"],
  },
  {
    tailwind: "bg-rose-400",
    konva: [0, "#fb7185"],
  },
  {
    tailwind: "bg-rose-500",
    konva: [0, "#f43f5e"],
  },
  {
    tailwind: "bg-rose-600",
    konva: [0, "#e11d48"],
  },
  {
    tailwind: "bg-rose-700",
    konva: [0, "#be123c"],
  },
  {
    tailwind: "bg-rose-800",
    konva: [0, "#9f1239"],
  },
  {
    tailwind: "bg-rose-900",
    konva: [0, "#881337"],
  },
  {
    tailwind: "bg-rose-950",
    konva: [0, "#4c0519"],
  },
];
