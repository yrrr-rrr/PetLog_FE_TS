export async function addDiary(
  type: string,
  title: string,
  content: string,
  imgs: File[],
  date: Date,
  openModal: (message: string) => void,
) {
  try {
    const response = await fetch("", {
      method: type == "add" ? "POST" : "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        images: imgs.length === 0 ? null : imgs,
        writtenAt: date,
      }),
    });

    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
  } catch (e) {
    console.log(e);
    openModal("전송 오류가 발생했습니다");
  }
}
