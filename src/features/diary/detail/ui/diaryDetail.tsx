import { BackButton } from "@/shared/backBtn/BackButton";
import { useEffect } from "react";
import { useDiaryDetail } from "../store/diaryDetailstore";
import { getDetail } from "../lib/getDetail";
import { dateToString } from "@/shared/DateToString/dateToString";
import { Carousel } from "@/shared/carousel/carousel";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

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
        <section>{<Carousel imgs={diaryDetail.images} />}</section>
        <section>
          <s.TitleBox>
            <p>{diaryDetail.title}</p>
            <s.ActionBox>
              <p>수정</p>
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
