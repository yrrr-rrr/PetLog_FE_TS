import type { DiaryType } from "@/processes/diary/store/diaryStore";

export function sortByDate(arr: DiaryType[]) {
  if (arr.length < 1) {
    return [];
  }

  return arr.reduce<Record<string, DiaryType[]>>((acc, currentValue) => {
    const date = currentValue.writtenAt.toString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(currentValue);
    return acc;
  }, {});
}
