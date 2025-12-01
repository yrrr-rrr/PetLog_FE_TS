export async function addDiary(
  type: string,
  title: string,
  content: string,
  imgs: string[] | null,
  date: string,
  openModal: (message: string) => void,
  acc: string,
  groupId: number,
) {
  try {
    const response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary`,
      {
        method: type == "add" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          title: title,
          content: content,
          images: imgs == null ? null : imgs,
          writtenAt: date,
        }),
      },
    );

    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
    openModal("전송 오류가 발생했습니다");
  }
}
