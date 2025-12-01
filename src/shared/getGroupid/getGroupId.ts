export async function getGroupId(setGroupId: (id: number) => void) {
  try {
    const response = await fetch("http://dev.petlog.site/api/groupId/my");
    const data = await response.json();
    console.log(data.data.groupIds[0]);
    setGroupId(data.data.groupIds[0]);
  } catch (e) {
    console.log(e);
  }
}
