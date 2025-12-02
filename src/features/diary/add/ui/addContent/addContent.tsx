import { BackButton } from "@/shared/backBtn/BackButton";
import { Carousel } from "@/shared/carousel/carousel";
import { useRef, useState } from "react";
import { Button } from "@/shared/button/button";
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { dateToString } from "@/shared/DateToString/dateToString";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { addDiary } from "../../lib/addDiary";
import { useAddImgs } from "../../store/imgStore";
import { useDiaryDetail } from "@/features/diary/detail/store/diaryDetailstore";
import { handleS3ImgUrl } from "@/shared/s3/handleS3ImgUrl";
import { getExistImgs, getNewImgs } from "../../lib/getImgs";
import { useDiary } from "@/features/diary/home/store/diaryStore";
import { formatYYYYMMDD } from "@/shared/formatYYYYMMDD/formatYYYYMMDD";
import { handleInput } from "../../lib/handleInput";

export function AddContent() {
  const { imgs } = useAddImgs();
  const { diaryDetail } = useDiaryDetail();
  const { groupId, diaryId } = useDiary();
  const { openModal } = useWarningModal();
  const calendarRef = useRef<HTMLInputElement | null>(null);
  const nav = useNavigate();
  const param = useLocation().pathname.split("/")[1];
  const currentPage = param == "editdiary" ? "edit" : "add";
  const placeholder = {
    title: diaryDetail.title,
    content: diaryDetail.content,
    writtenAt: diaryDetail.writtenAt,
  };
  const [date, setDate] = useState<Date | string>(
    currentPage == "edit" ? placeholder.writtenAt : new Date(),
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const previewImgs = imgs.filter((x) => !x.isDeleted).map((x) => x.previewUrl);
  const acc = localStorage.getItem("acc");

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
                currentPage == "edit"
                  ? placeholder.title
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
                currentPage == "edit"
                  ? placeholder.writtenAt.replaceAll(".", "-")
                  : (date as string)
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
            currentPage == "edit"
              ? placeholder.content
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
            onClick={async () => {
              if (!acc) {
                return;
              }
              const newImgArr = getNewImgs(imgs);
              const existImgArr = getExistImgs(imgs);
              const url = await handleS3ImgUrl(newImgArr, acc, "DIARY_IMAGE");
              const finalImgArr = existImgArr.concat(url);
              addDiary(
                param == "editdiary" ? "edit" : "add",
                handleInput(title, placeholder.title, currentPage),
                handleInput(content, placeholder.content, currentPage),
                finalImgArr ? finalImgArr : null,
                formatYYYYMMDD(date),
                openModal,
                acc,
                groupId,
                diaryId,
                nav,
              );
            }}
            disabled={
              (title || placeholder.title) && (content || placeholder.content)
                ? false
                : true
            }
          >
            저장
          </Button>
        </s.BtnBox>
      </s.ContentSection>
    </s.Main>
  );
}
