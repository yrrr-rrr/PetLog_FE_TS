export function truncate(str: string) {
  if (str.length <= 7) {
    return str;
  }
  console.log(str.length, str.slice(0, 7));
  return str.slice(0, 7) + "...";
}
