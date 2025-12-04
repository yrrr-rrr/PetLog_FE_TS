import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";

export async function setNotification(
  toggleResult: boolean,
  openModal: (message: string) => void,
  acc: string,
) {
  try {
    let response = await fetch("https://dev.petlog.site/api/notification", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        isNotificationEnabled: toggleResult,
      }),
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/notification", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
        body: JSON.stringify({
          isNotificationEnabled: toggleResult,
        }),
      });
    }

    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
