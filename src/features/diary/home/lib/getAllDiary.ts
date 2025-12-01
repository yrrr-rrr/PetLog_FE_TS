import type { DiaryType } from "../store/diaryStore";

export async function getAllDiary(
  setAllDiary: (arr: DiaryType[]) => void,
  openModal: (warningMessage: string) => void,
  groupId: number,
  acc: string,
) {
  try {
    const response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${acc}`,
        },
      },
    );
    // const response = await fetch("/public/dum/home.json");
    const data = await response.json();
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    setAllDiary(data.data.diary);
  } catch (e) {
    console.log(e);
  }
}
