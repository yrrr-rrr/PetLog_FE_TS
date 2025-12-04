import { BackButton } from "@/shared/backBtn/BackButton";
import { useEffect } from "react";
import * as s from "./style";
import { GetIcon } from "@/shared/getIcon/getIcon";
import { useNavigate } from "react-router-dom";
import { getGroupId } from "@/shared/getGroupid/getGroupId";
import { useModal } from "@/shared/baseModal/store/modalStroe";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { useAddImgs } from "@/processes/diary/store/imgStore";
import { getAllDiary } from "@/features/diary/home/lib/getAllDiary";
import { sortByDate } from "@/features/diary/home/lib/sortByDate";
import { useDiary } from "@/processes/diary/store/diaryStore";

export function Home() {
  const nav = useNavigate();
  const { setClose } = useModal();
  const { setInitStore } = useAddImgs();
  const { allDiary, setAllDiary, setGroupId, setDiaryId } = useDiary();
  const { accessToken } = useNative();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    const getData = async () => {
      const id = await getGroupId(setGroupId, accessToken);
      await getAllDiary(setAllDiary, id, accessToken);
    };
    getData();
    setClose();
  }, [accessToken, setAllDiary, setClose, setGroupId]);

  useEffect(() => {
    setInitStore();
  }, [setInitStore]);

  const dieries = Object.entries(sortByDate(allDiary)).reverse();

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
            <s.Date>{arr[0]}</s.Date>
            <s.ThumbnailBox>
              {arr[1][0].diaryInfo.map((obj) => (
                <s.Thumbnail
                  key={obj.diaryId}
                  onClick={() => {
                    setDiaryId(obj.diaryId);
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
        {dieries.length == 0 && (
          <s.EmptyDiary>
            <GetIcon name="Pets" width={150} height={150} />
            <p>반려동물의 성장을 기록해보세요</p>
          </s.EmptyDiary>
        )}
      </s.Diarysection>
    </s.Main>
  );
}
