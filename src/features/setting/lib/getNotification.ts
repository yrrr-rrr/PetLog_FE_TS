import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type React from "react";

export async function getNotification(
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: (message: string) => void,
  acc: string,
) {
  try {
    let response = await fetch("https://dev.petlog.site/api/notification", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/notification", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
      });
    }

    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    const data = await response.json();
    setToggle(data.data.isNotificationEnabled);
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
