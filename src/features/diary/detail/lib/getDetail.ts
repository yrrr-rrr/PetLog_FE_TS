import type { DiaryDetailType } from "./../store/diaryDetailstore";
export async function getDetail(
  groupId: number,
  diaryId: number,
  setDiaryDetail: (obj: DiaryDetailType) => void,
) {
  try {
    const response = await fetch("/public/dum/diaryDetail.json");
    const data = await response.json();
    setDiaryDetail(data.data);
  } catch (e) {
    console.log(e);
  }
}
