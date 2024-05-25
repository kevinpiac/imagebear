"use server";

import OpenAI from "openai";
import axios from "axios";
import { Readable } from "stream";
import { toFile } from "openai/uploads";

function toArrayBuffer(buffer: Buffer) {
  const arrayBuffer = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return arrayBuffer;
}

export async function generateImageOld(
  imageUrl: string,
  maskUrl: string,
  prompt: string,
) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const image = Buffer.from(imageUrl.split(",")[1], "base64");
  const mask = Buffer.from(maskUrl.split(",")[1], "base64");

  const file1 = await toFile(toArrayBuffer(image));
  const file2 = await toFile(toArrayBuffer(mask));

  console.log("Files", file1, file2);

  const response = await openai.images.edit({
    model: "dall-e-2",
    image: file1,
    mask: file2,
    prompt,
    n: 1,
    size: "1024x1024",
  });

  console.log("RESPONSE", response.data);

  const image_url = response.data[0].url;
  console.log("GOT RESPONSE", image_url);
  return image_url;
}

const dataURLToBlob = (dataURL: string) => {
  return fetch(dataURL).then((res) => {
    return res.blob();
  });
};

const bufferToDataURL = (buffer: Buffer, mimeType = "image/png") => {
  const base64String = buffer.toString("base64");
  return `data:${mimeType};base64,${base64String}`;
};

export async function generateImage(
  imageUrl: string,
  maskUrl: string,
  prompt: string,
) {
  // Convert DataURL to Blob
  const imageBlob = await dataURLToBlob(imageUrl);
  const maskBlob = await dataURLToBlob(maskUrl);

  // Create a FormData object
  const formData = new FormData();
  formData.append("init_image", imageBlob, "init_image.png");
  formData.append("mask_image", maskBlob, "mask_image.png");
  formData.append("model", "absolute_reality_1_8_1_inpaint");
  // formData.append("model", "icbinp_seco_inpaint");
  formData.append("format", "png");
  formData.append("prompt", prompt);

  try {
    const result = await axios.post(
      "https://api.dezgo.com/inpainting",
      formData,
      {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Dezgo-Key": process.env.DEZGO_API_KEY,
        },
      },
    );

    const resultBuffer = Buffer.from(result.data, "binary");

    const url = bufferToDataURL(resultBuffer);
    console.log("url", url);
    return url;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function removeBackground(imageUrl: string) {
  // Convert DataURL to Blob
  const imageBlob = await dataURLToBlob(imageUrl);

  // Create a FormData object
  const formData = new FormData();
  formData.append("image", imageBlob, "init_image.png");
  formData.append("mode", "transparent");

  try {
    const result = await axios.post(
      "https://api.dezgo.com/remove-background",
      formData,
      {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Dezgo-Key": process.env.DEZGO_API_KEY,
        },
      },
    );

    const resultBuffer = Buffer.from(result.data, "binary");

    const url = bufferToDataURL(resultBuffer);
    console.log("url", url);
    return url;
  } catch (e) {
    console.log(e);
    return null;
  }
}
