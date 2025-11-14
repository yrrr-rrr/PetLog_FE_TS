export async function leaveGroup(openModal: (message: string) => void) {
  try {
    const response = await fetch("", {
      method: "DELETE",
    });
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
