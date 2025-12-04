import { makeFileName } from "../makeFileName/makeFileName";
import { getPresignedUrl, type FileType } from "./getPresignedUrl";
import { uploadImgs } from "./uploadImgs";

export async function handleS3ImgUrl(
  imgs: null | File[],
  acc: string,
  type: FileType,
) {
  const imgNames: string[] = [];
  if (imgs == null) {
    return [""];
  }
  if (Array.isArray(imgs)) {
    imgs.forEach((x, idx) => {
      const name = makeFileName(x, idx);
      imgNames.push(name);
    });
  } else {
    const name = makeFileName(imgs, 0);
    imgNames.push(name);
  }

  const presignedUrl: PresignedUrlType[] = await getPresignedUrl(
    type,
    imgNames,
    acc,
  );

  return await Promise.all(
    presignedUrl.map((x, idx) =>
      uploadImgs(x.presignedUrl, imgs[idx], x.filePath),
    ),
  );
}

type PresignedUrlType = {
  filePath: string;
  presignedUrl: string;
};
