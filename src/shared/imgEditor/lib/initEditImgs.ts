import type { ImgType } from "@/processes/diary/store/addStore";

export function initEditImgs(
  existingUrls: string[],
  setImgs: (img: ImgType) => void,
  setIsInit: (bool: boolean) => void,
) {
  existingUrls.forEach((url, idx) =>
    setImgs({
      id: `existing-${idx}`,
      previewUrl: url,
      status: "existing",
      s3Url: url,
    }),
  );
  setIsInit(true);
}
