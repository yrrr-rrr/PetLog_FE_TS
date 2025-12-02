import type { DiaryDetailType } from "./../store/diaryDetailstore";
export async function getDetail(
  groupId: number,
  diaryId: number,
  setDiaryDetail: (obj: DiaryDetailType) => void,
  acc: string,
) {
  try {
    const response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
      },
    );
    const data = await response.json();
    setDiaryDetail(data.data);
  } catch (e) {
    console.log(e);
  }
}
