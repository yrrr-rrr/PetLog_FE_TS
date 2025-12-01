import type { NavigateFunction } from "react-router-dom";

export async function leaveGroup(
  openModal: (message: string) => void,
  acc: string,
  groupId: number,
  nav: NavigateFunction,
) {
  try {
    const response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/leave`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
      },
    );
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    nav("/groupentry");
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
