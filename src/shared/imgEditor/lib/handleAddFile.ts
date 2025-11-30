import type { ImgType } from "@/features/diary/add/store/addStore";
import type React from "react";

export function handleAddFile(
  e: React.ChangeEvent<HTMLInputElement>,
  setImgs: (img: ImgType) => void,
) {
  const fileList = e.target.files;

  if (!fileList) {
    return;
  }

  const newFiles = Array.from(fileList);
  newFiles.forEach((file, idx) =>
    setImgs({
      id: `new-${Date.now()}-${idx}`,
      file,
      previewUrl: URL.createObjectURL(file),
      status: "new",
    }),
  );
}
