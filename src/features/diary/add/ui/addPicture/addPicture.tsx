import { GetIcon } from "@/shared/getIcon/getIcon";
import * as s from "./style";
import { useRef, useState } from "react";
import { BackButton } from "@/shared/backBtn/BackButton";
import { handleDelete } from "../../lib/handleDelete";
import { handleFile } from "../../lib/handleFile";
import { Button } from "@/shared/button/button";
import { useAddDiary } from "../../store/addStore";
import { useNavigate } from "react-router-dom";

export function AddPicture() {
  const { setImgs, setPreviewImgs, previewImgs, fileImgs } = useAddDiary();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imgArr, setImgArr] = useState<File[]>(fileImgs);
  const [previewList, setPreviewList] = useState<string[]>(previewImgs);
  const imgNum = imgArr.length;
  const nav = useNavigate();

  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        {""}
      </BackButton>
      <section>
        <s.HelperText>성장 일기에 사용할 사진을 추가해 주세요</s.HelperText>
        <s.AddImgBox>
          {previewList.map((img, idx) => (
            <s.ImgBox key={idx}>
              <s.DeleteBtn
                name="DeleteBtn"
                width={24}
                stroke="#1E1E1E"
                onClick={() => {
                  handleDelete(idx, setImgArr, setPreviewList);
                }}
              />
              <s.Img src={img} alt="" />
            </s.ImgBox>
          ))}
          <div>
            <s.InputFile
              type="file"
              ref={inputRef}
              onChange={(e) => {
                handleFile(e, setImgArr, setPreviewList);
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
        <s.BtnBox>
          <Button
            onClick={() => {
              setImgs(imgArr);
              setPreviewImgs(previewList);
              nav("/adddiary/content");
            }}
          >
            다음
          </Button>
        </s.BtnBox>
      </section>
    </s.Main>
  );
}
