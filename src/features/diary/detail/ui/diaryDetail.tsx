import { BackButton } from "@/shared/backBtn/BackButton";
import { useEffect } from "react";
import { useDiaryDetail } from "../store/diaryDetailstore";
import { getDetail } from "../lib/getDetail";
import { dateToString } from "@/shared/DateToString/dateToString";
import { Carousel } from "@/shared/carousel/carousel";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { useModal } from "@/shared/baseModal/store/modalStroe";
import { BaseModal } from "@/shared/baseModal/ui/baseModal";
import { useDiary } from "../../home/store/diaryStore";
import { deleteDiary } from "../lib/deleteDiary";

export function DiaryDetail() {
  const { diaryDetail, setDiaryDetail } = useDiaryDetail();
  const { groupId, diaryId } = useDiary();
  const { isOpen, setIsOpen } = useModal();
  const diaryDate = dateToString(diaryDetail.writtenAt);
  const nav = useNavigate();
  const acc = localStorage.getItem("acc");

  useEffect(() => {
    if (!acc) {
      return;
    }
    getDetail(groupId, Number(diaryId), setDiaryDetail, acc);
  }, [acc, diaryId, groupId, setDiaryDetail]);

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
              <p
                onClick={() => {
                  setIsOpen();
                }}
              >
                삭제
              </p>
            </s.ActionBox>
          </s.TitleBox>
          <s.DateText>{diaryDate}</s.DateText>
          <s.Content>{diaryDetail.content}</s.Content>
        </section>
      </s.DiarySection>
      {isOpen && (
        <BaseModal
          message='"현재 일기를 삭제 하시겠습니까?"'
          onClick={() => {
            if (!acc) {
              return;
            }
            deleteDiary(groupId, Number(diaryId), acc, nav);
          }}
        />
      )}
    </s.Main>
  );
}
