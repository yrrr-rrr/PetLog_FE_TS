import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { DiaryType } from "@/processes/diary/store/diaryStore";

export async function getAllDiary(
  setAllDiary: (arr: DiaryType[]) => void,
  groupId: number,
  acc: string,
) {
  try {
    let response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${acc}`,
        },
      },
    );

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch(
        `https://dev.petlog.site/api/groups/${groupId}/diary`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        },
      );
    }

    const data = await response.json();
    setAllDiary(data.data.diary);
  } catch (e) {
    console.log(e);
  }
}
