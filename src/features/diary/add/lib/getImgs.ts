import type { ImgType } from "@/processes/diary/store/addStore";

export function getNewImgs(imgs: ImgType[]) {
  const newImg = imgs
    .map((x) => x.file)
    .filter((x): x is File => x !== undefined);
  return newImg;
}

export function getExistImgs(imgs: ImgType[]) {
  const existImg = imgs
    .filter((x) => x.status == "existing")
    .map((x) => x.s3Url)
    .filter((x): x is string => x !== undefined);
  return existImg;
}
