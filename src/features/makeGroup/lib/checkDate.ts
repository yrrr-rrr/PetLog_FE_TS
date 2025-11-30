import type { CareFormType, PetInfo } from "../type";

export function checkDate(
  type: keyof CareFormType | keyof PetInfo,
  value: number,
) {
  const v = value.toString();
  // 시간 유효성 검사 (1~24)
  if (type == "feedingCycle" || type == "wateringCycle") {
    return /^(?:[1-9]|1[0-9]|2[0-4])$/.test(v);
  }
  // 시 유효성 검사 (1~12)
  if (type == "lastFeedingTimeHour" || type == "lastWateringTimeHour") {
    return /^(?:[1-9]|1[0-9]|2[0-4])$/.test(v);
  }
  // 분 유효성 검사 (1~59)
  return /^(?:[1-9]|[1-5][0-9])$/.test(v);
}
