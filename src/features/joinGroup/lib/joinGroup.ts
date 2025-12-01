import type React from "react";

export async function joinGroup(
  code: string,
  setIsReject: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: (message: string) => void,
  acc: string,
) {
  try {
    const response = await fetch("https://dev.petlog.site/api/groups/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        joinCode: code,
      }),
    });
    if (!response.ok) {
      setIsReject(true);
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
