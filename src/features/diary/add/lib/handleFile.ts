import type React from "react";

export function handleFile(
  e: React.ChangeEvent<HTMLInputElement>,
  setImgArr: React.Dispatch<React.SetStateAction<File[]>>,
  setPreviewList: React.Dispatch<React.SetStateAction<string[]>>,
) {
  const value = e.target.files?.[0];
  if (!value) {
    return;
  }
  setImgArr((prev) => [...prev, value]);
  const preview = URL.createObjectURL(value);
  setPreviewList((prev) => [...prev, preview]);
}
