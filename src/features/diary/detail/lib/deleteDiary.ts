import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { NavigateFunction } from "react-router-dom";

export async function deleteDiary(
  groupId: number,
  diaryId: number,
  acc: string,
  nav: NavigateFunction,
) {
  try {
    let response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
      {
        method: "DELETE",
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
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
        },
      );
    }

    if (response.ok) {
      nav("/diary");
    }
  } catch (e) {
    console.log(e);
  }
}
