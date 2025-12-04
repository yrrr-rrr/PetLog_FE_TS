import { useEffect, useRef } from "react";
import * as s from "./style";

import { useAddImgs } from "@/processes/diary/store/imgStore";
import { handleAddFile } from "../lib/handleAddFile";
import { initEditImgs } from "../lib/initEditImgs";
import { GetIcon } from "@/shared/getIcon/getIcon";

export function ImgEditor({
  currentPage,
  existingUrls,
}: {
  currentPage: string;
  existingUrls?: string[];
}) {
  const { imgs, isInit, setImgs, setIsInit, deleteImg } = useAddImgs();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const imgNum = imgs.length;

  useEffect(() => {
    if (currentPage == "edit" && existingUrls && isInit == false) {
      initEditImgs(existingUrls, setImgs, setIsInit);
    }
  }, [currentPage, existingUrls, isInit, setImgs, setIsInit]);

  return (
    <>
      <s.AddImgBox>
        {imgs
          .filter((img) => !img.isDeleted)
          .map((img) => (
            <s.ImgBox key={img.id}>
              <s.DeleteBtn
                name="DeleteBtn"
                width={24}
                stroke="#1E1E1E"
                onClick={() => {
                  deleteImg(img.id);
                }}
              />
              <s.Img src={img.previewUrl} alt="" />
            </s.ImgBox>
          ))}
        <div>
          <s.InputFile
            type="file"
            ref={inputRef}
            onChange={(e) => {
              handleAddFile(e, setImgs);
            }}
          />
          {imgNum < 6 && (
            <s.EmptyImg
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <GetIcon name="AddPicture" width={36} />
            </s.EmptyImg>
          )}
        </div>
      </s.AddImgBox>
    </>
  );
}
