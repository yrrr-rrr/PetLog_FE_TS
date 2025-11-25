export function stringToDate(originalDate: string | Date) {
  if (typeof originalDate !== "string") {
    return originalDate;
  }

  const splitLetter = originalDate[4];
  const tempString = originalDate.split(splitLetter);
  const year = Number(tempString[0]);
  const month = Number(tempString[1]) - 1;
  const date = Number(tempString[2]);

  const newDate = new Date(year, month, date);
  return newDate;
}
