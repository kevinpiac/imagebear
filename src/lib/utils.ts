import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fileToDataUrl = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
  });
};

export const dataUrlToImageElement = async (
  url: string,
): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    if (!url) {
      throw new Error("No url provided");
    }
    const img = document.createElement("img");

    function onload() {
      return resolve(img);
    }

    function onerror() {
      throw new Error("Failed to load image");
    }

    img.addEventListener("load", onload);
    img.addEventListener("error", onerror);
    img.src = url;
  });
};
