import type { CareFormType, PetInfo } from "../type";
import { formatDate } from "./formatDate";

export async function postGroupInfo(
  petInfo: PetInfo,
  careInfo: CareFormType,
  url: string,
  acc: string,
  openModal: (warningMessage: string) => void,
) {
  try {
    const response = await fetch("https://dev.petlog.site/api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        imageUrl: url == "" ? null : url,
        name: petInfo.name,
        age: petInfo.age,
        weight: petInfo.weight,
        gender: petInfo.gender,
        feedingCycle: careInfo.feedingCycle,
        lastFeedingTime: formatDate(
          careInfo.lastFeedingTimeHour,
          careInfo.lastFeedingTimeMinute,
        ),
        wateringCycle: careInfo.wateringCycle,
        lastWateringTime: formatDate(
          careInfo.lastWateringTimeHour,
          careInfo.lastWateringTimeMinute,
        ),
        note: careInfo.note,
      }),
    });
    if (!response.ok) {
      openModal("전송 오류가 발생했습니다");
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
