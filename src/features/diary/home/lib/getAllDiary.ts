import type { DiaryType } from "../store/diaryStore";

export async function getAllDiary(
  setAllDiary: (arr: DiaryType[]) => void,
  openModal: (warningMessage: string) => void,
) {
  try {
    const response = await fetch("/public/dum/home.json");
    const data = await response.json();
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    setAllDiary(data.data.allDiary);
  } catch (e) {
    console.log(e);
  }
}
