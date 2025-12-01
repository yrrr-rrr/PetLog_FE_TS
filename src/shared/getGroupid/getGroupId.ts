export async function getGroupId(
  setGroupId: (id: number) => void,
  acc: string,
) {
  try {
    const response = await fetch("https://dev.petlog.site/api/groups/my", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${acc}`,
      },
    });
    const data = await response.json();
    setGroupId(data.data.groupIds[0]);
    return data.data.groupIds[0];
  } catch (e) {
    console.log(e);
  }
}
