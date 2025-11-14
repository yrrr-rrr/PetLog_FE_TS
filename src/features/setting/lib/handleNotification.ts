export async function handleNotification(
  toggleResult: boolean,
  openModal: (message: string) => void,
) {
  try {
    const response = await fetch("", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isNotificationEnabled: toggleResult,
      }),
    });
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
