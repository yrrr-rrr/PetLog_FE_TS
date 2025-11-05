import React, { useEffect, useMemo, useState } from "react";
import { useForm, type CareInfo, type PetInfo } from "../../store/formStore";
import * as s from "./style";
import { Button } from "@/shared/button/button";
import type { CareDisabledObj } from "./type";
import { CycleInput } from "./container/cycleInput";
import { LastCareTime } from "./container/lastCareTime";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";

export function CareInfoForm() {
  const { petInfo } = useForm();
  const { openModal, isOpen } = useWarningModal();
  const [disabled, setDisabled] = useState<CareDisabledObj>({
    feedingCycle: true,
    lastFeedingTime: true,
    wateringCycle: true,
    lastWateringTime: true,
  });
  const [form, setForm] = useState<CareInfo>({
    feedingCycle: 0,
    lastFeedingTime: new Date(),
    wateringCycle: 0,
    lastWateringTime: new Date(),
    note: null,
  });

  const abled = useMemo(
    () => Object.entries(disabled).every(([_, v]) => v === false, [disabled]),
    [disabled],
  );

  return (
    <s.Form>
      <s.Section>
        <CycleInput
          label="급여 주기"
          type="meal"
          setForm={setForm}
          setDisabled={setDisabled}
        />
        <LastCareTime
          label="마지막 급여 시간"
          type="meal"
          setForm={setForm}
          setDisabled={setDisabled}
        />
      </s.Section>
      <s.Section>
        <CycleInput
          label="물 교체 주기"
          type="replace"
          setForm={setForm}
          setDisabled={setDisabled}
        />
        <LastCareTime
          label="마지막 교체 시간"
          type="replace"
          setForm={setForm}
          setDisabled={setDisabled}
        />
      </s.Section>
      <s.Note
        placeholder="보육 시 참고해야 할 사항이 있다면 적어주세요"
        onChange={(e) => {
          const value = e.target.value;
          setForm((prev) => {
            if (value) {
              return { ...prev, note: value };
            }
            return { ...prev, note: null };
          });
        }}
      ></s.Note>
      <s.BtnBox>
        <Button
          disabled={!abled}
          onClick={(e) => {
            e.preventDefault();
            postGroupInfo(petInfo, form, openModal);
          }}
        >
          확인
        </Button>
      </s.BtnBox>
    </s.Form>
  );
}

async function postGroupInfo(
  petInfo: PetInfo,
  careInfo: CareInfo,
  openModal: (warningMessage: string) => void,
) {
  try {
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
        lastFeedingTime: careInfo.lastFeedingTime,
        wateringCycle: careInfo.wateringCycle,
        lastWateringTime: careInfo.lastWateringTime,
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
