import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { DiaryType } from "../store/diaryStore";

export async function getAllDiary(
  setAllDiary: (arr: DiaryType[]) => void,
  openModal: (warningMessage: string) => void,
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
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    setAllDiary(data.data.diary);
  } catch (e) {
    console.log(e);
  }
}
