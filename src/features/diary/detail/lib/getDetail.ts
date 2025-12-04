import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { DiaryDetailType } from "@/processes/diary/store/diaryDetailstore";
export async function getDetail(
  groupId: number,
  diaryId: number,
  setDiaryDetail: (obj: DiaryDetailType) => void,
  acc: string,
) {
  try {
    let response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
      },
    );

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch(
        `https://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
        },
      );
    }

    const data = await response.json();
    setDiaryDetail(data.data);
  } catch (e) {
    console.log(e);
  }
}
