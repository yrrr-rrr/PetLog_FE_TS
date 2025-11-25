import type React from "react";

export async function getNotification(
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: (message: string) => void,
) {
  try {
    const response = await fetch("/public/dum/setting.json");
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    const data = await response.json();
    setToggle(data.data.isNotificationEnabled);
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
