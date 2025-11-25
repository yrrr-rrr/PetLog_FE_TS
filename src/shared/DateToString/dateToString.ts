export function dateToString(originaldate: string | Date) {
  if (!originaldate) {
    return "";
  }
  if (typeof originaldate == "string") {
    const splitLetter = originaldate[4];
    const tempDateString = originaldate.split(splitLetter);
    const year = tempDateString[0];
    const month = tempDateString[1];
    const date =
      tempDateString[2].charAt(0) == "0"
        ? tempDateString[2].slice(1)
        : tempDateString[2];

    return `${year}년 ${month}월 ${date}일`;
  }
  const year = originaldate.getFullYear();
  const month = originaldate.getMonth() + 1;
  const date = originaldate.getDate();

  return `${year}년 ${month}월 ${date}일`;
}
