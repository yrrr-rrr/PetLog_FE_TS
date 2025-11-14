import type { CareFormType, PetInfo } from "../type";
import { formatDate } from "./formatDate";

export async function postGroupInfo(
  petInfo: PetInfo,
  careInfo: CareFormType,
  openModal: (warningMessage: string) => void,
) {
  try {
    console.log(petInfo, careInfo);
    const response = await fetch("/api/groups", {
      //나중에 스웨거 오면 경로 수정
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: petInfo.imgUrl,
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
