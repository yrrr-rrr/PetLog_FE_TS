import { BackButton } from "@/shared/backBtn/BackButton";
import { Carousel } from "@/shared/carousel/carousel";
import { useAddDiary } from "../../store/addStore";
import { useRef, useState } from "react";
import { Button } from "@/shared/button/button";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { dateToString } from "@/shared/DateToString/dateToString";
import { stringToDate } from "@/shared/stringToDate/stringToDate";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { addDiary } from "../../lib/addDiary";

export function AddContent() {
  const { previewImgs, fileImgs } = useAddDiary();
  const { openModal } = useWarningModal();
  const calendarRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<Date | string>(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      <s.ContentSection>
        {previewImgs.length !== 0 && (
          <Carousel imgs={previewImgs} width={200} />
        )}
        <s.TitleBox>
          <s.Div>
            <s.Title
              type="text"
              placeholder="제목을 입력해 주세요"
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
              }}
            />
            <s.CalendarInput
              type="date"
              ref={calendarRef}
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
          placeholder="일기 내용을 입력해 주세요"
          maxLength={3000}
          onChange={(e) => {
            const value = e.target.value;
            setContent(value);
          }}
        ></s.Content>
        <s.BtnBox>
          <Button
            onClick={() => {
              addDiary(title, content, fileImgs, stringToDate(date), openModal);
            }}
          >
            저장
          </Button>
        </s.BtnBox>
      </s.ContentSection>
    </s.Main>
  );
}
