import { BackButton } from "@/shared/backBtn/BackButton";
import { useDiary } from "../store/diaryStore";
import { useEffect } from "react";
import { getAllDiary } from "../lib/getAllDiary";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { sortByDate } from "../lib/sortByDate";
import * as s from "./style";
import { GetIcon } from "@/shared/getIcon/getIcon";
import { useNavigate } from "react-router-dom";
import { useAddImgs } from "../../add/store/imgStore";

export function Home() {
  const nav = useNavigate();
  const { setInitStore } = useAddImgs();
  const { allDiary, setAllDiary, setSelectId } = useDiary();
  const { openModal } = useWarningModal();

  useEffect(() => {
    getAllDiary(setAllDiary, openModal);
  }, [openModal, setAllDiary]);

  useEffect(() => {
    setInitStore();
  }, [setInitStore]);

  const dieries = Object.entries(sortByDate(allDiary));

  return (
    <s.Main>
      <BackButton>성장 일기</BackButton>
      <s.PlusBtn
        onClick={() => {
          nav("/adddiary/pictures");
        }}
      >
        <GetIcon name="DeleteBtn" width={24} />
      </s.PlusBtn>
      <s.Diarysection>
        {dieries.map((arr) => (
          <s.DiariesByDate key={arr[0]}>
            <s.Date>{arr[0].replaceAll("-", ".")}</s.Date>
            <s.ThumbnailBox>
              {arr[1][0].diaryInfo.map((obj) => (
                <s.Thumbnail
                  key={obj.diaryId}
                  onClick={() => {
                    setSelectId(obj.diaryId);
                    nav(`/diary/:${obj.diaryId}`);
                  }}
                >
                  {obj.image === null ? (
                    <s.DefaultImg>
                      <GetIcon name="DefaultIcon" width={80} />
                    </s.DefaultImg>
                  ) : (
                    <s.ImgBox>
                      <s.ThumbnailImg src={obj.image} alt="" />
                      <div></div>
                    </s.ImgBox>
                  )}
                  <s.Title>{obj.title}</s.Title>
                </s.Thumbnail>
              ))}
            </s.ThumbnailBox>
          </s.DiariesByDate>
        ))}
      </s.Diarysection>
    </s.Main>
  );
}
