import type { NavigateFunction } from "react-router-dom";

export async function deleteDiary(
  groupId: number,
  diaryId: number,
  acc: string,
  nav: NavigateFunction,
) {
  try {
    const response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
      },
    );
    console.log(response.ok);
    if (response.ok) {
      nav("/diary");
    }
  } catch (e) {
    console.log(e);
  }
}
