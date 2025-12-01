export async function deleteDiary(groupId: number, diaryId: number) {
  try {
    const response = await fetch(
      `http://dev.petlog.site/api/groups/${groupId}/diary/${diaryId}`,
    );
    const data = await response.json();
  } catch (e) {
    console.log(e);
  }
}
