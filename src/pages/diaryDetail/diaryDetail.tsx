import { BackButton } from "@/shared/backBtn/BackButton";
import { useEffect } from "react";
import { dateToString } from "@/shared/DateToString/dateToString";
import { Carousel } from "@/shared/carousel/carousel";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { useModal } from "@/shared/baseModal/store/modalStroe";
import { BaseModal } from "@/shared/baseModal/ui/baseModal";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { useDiaryDetail } from "@/processes/diary/store/diaryDetailstore";
import { useDiary } from "@/processes/diary/store/diaryStore";
import { getDetail } from "@/features/diary/detail/lib/getDetail";
import { deleteDiary } from "@/features/diary/detail/lib/deleteDiary";

export function DiaryDetail() {
  const { diaryDetail, setDiaryDetail } = useDiaryDetail();
  const { groupId, diaryId } = useDiary();
  const { isOpen, setIsOpen } = useModal();
  const diaryDate = dateToString(diaryDetail.writtenAt);
  const nav = useNavigate();
  const { accessToken } = useNative();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    getDetail(groupId, Number(diaryId), setDiaryDetail, accessToken);
  }, [accessToken, diaryId, groupId, setDiaryDetail]);

  return (
    <s.Main>
      <BackButton>{diaryDate}</BackButton>
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
            if (!accessToken) {
              return;
            }
            deleteDiary(groupId, Number(diaryId), accessToken, nav);
          }}
        />
      )}
    </s.Main>
  );
}
