import { BackButton } from "@/shared/backBtn/BackButton";
import { Carousel } from "@/shared/carousel/carousel";
import { useRef, useState } from "react";
import { Button } from "@/shared/button/button";
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { dateToString } from "@/shared/DateToString/dateToString";
import { stringToDate } from "@/shared/stringToDate/stringToDate";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { addDiary } from "../../lib/addDiary";
import { useAddImgs } from "../../store/imgStore";
import { useDiaryDetail } from "@/features/diary/detail/store/diaryDetailstore";

export function AddContent() {
  const { imgs } = useAddImgs();
  const { diaryDetail } = useDiaryDetail();
  const { openModal } = useWarningModal();
  const param = useLocation().pathname.split("/")[1];
  const calendarRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<Date | string>(
    param == "editdiary"
      ? diaryDetail.writtenAt.replaceAll(".", "-")
      : new Date(),
  );
  const [title, setTitle] = useState(
    param == "editdiary" ? diaryDetail.title : "",
  );
  const [content, setContent] = useState(
    param == "editdiary" ? diaryDetail.content : "",
  );
  const nav = useNavigate();
  const previewImgs = imgs.filter((x) => !x.isDeleted).map((x) => x.previewUrl);

  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        {""}
      </BackButton>
      <s.ContentSection>
        {imgs.length !== 0 && <Carousel imgs={previewImgs} width={200} />}
        <s.TitleBox>
          <s.Div>
            <s.Title
              type="text"
              placeholder={
                param == "editdiary"
                  ? diaryDetail.title
                  : "제목을 입력해 주세요"
              }
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
              }}
            />
            <s.CalendarInput
              type="date"
              ref={calendarRef}
              value={
                param == "editdiary"
                  ? diaryDetail.writtenAt.replaceAll(".", "-")
                  : new Date().toISOString().split("T")[0]
              }
              onChange={(e) => {
                const value = e.target.value;
                setDate(value);
              }}
            />
            <s.CalendarIcon
              name="Calendar"
              width={24}
              onClick={() => {
                calendarRef.current?.showPicker();
              }}
            />
          </s.Div>
          <s.Date>{dateToString(date)}</s.Date>
        </s.TitleBox>
        <s.Content
          placeholder={
            param == "editdiary"
              ? diaryDetail.content
              : "일기 내용을 입력해 주세요"
          }
          maxLength={3000}
          onChange={(e) => {
            const value = e.target.value;
            setContent(value);
          }}
        ></s.Content>
        <s.BtnBox>
          <Button
            onClick={() => {
              console.log(title, content, imgs, date);
              //  imgObj에서 s3 링크 뽑아내기 (수정일 땨는 status가 new인 이미지만 필터로 뽑아서 s3 돌리고 concat으로 붙여서 post )
              // addDiary(type, title, content, [], stringToDate(date), openModal);
            }}
          >
            저장
          </Button>
        </s.BtnBox>
      </s.ContentSection>
    </s.Main>
  );
}
