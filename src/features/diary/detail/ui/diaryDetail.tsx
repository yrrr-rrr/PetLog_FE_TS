import { BackButton } from "@/shared/backBtn/BackButton";
import { useEffect } from "react";
import { useDiaryDetail } from "../store/diaryDetailstore";
import { getDetail } from "../lib/getDetail";
import { dateToString } from "@/shared/DateToString/dateToString";
import { Carousel } from "@/shared/carousel/carousel";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

export function DiaryDetail() {
  const { diaryDetail, setDiaryDetail } = useDiaryDetail();
  useEffect(() => {
    getDetail(0, 0, setDiaryDetail);
  }, [setDiaryDetail]);
  const diaryDate = dateToString(diaryDetail.writtenAt);
  const nav = useNavigate();

  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        {diaryDate}
      </BackButton>
      <s.DiarySection>
        {diaryDetail.images.length !== 0 && (
          <Carousel imgs={diaryDetail.images} width={400} />
        )}
        <section>
          <s.TitleBox>
            <p>{diaryDetail.title}</p>
            <s.ActionBox>
              <p
                onClick={() => {
                  nav("/editdiary/pictures");
                }}
              >
                수정
              </p>
              <p>삭제</p>
            </s.ActionBox>
          </s.TitleBox>
          <s.DateText>{diaryDate}</s.DateText>
          <s.Content>{diaryDetail.content}</s.Content>
        </section>
      </s.DiarySection>
    </s.Main>
  );
}
