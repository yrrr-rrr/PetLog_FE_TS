import { useMemo, useState } from "react";
import { useForm } from "../../store/formStore";
import * as s from "./style";
import { Button } from "@/shared/button/button";
import { CycleInput } from "./container/cycleInput";
import { LastCareTime } from "./container/lastCareTime";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import type { CareFormType } from "../../type";
import { postGroupInfo } from "../../lib/postGroupInfo";

export function CareInfoForm() {
  const { petInfo } = useForm();
  const { openModal } = useWarningModal();
  const [disabled, setDisabled] = useState({
    feedingCycle: false,
    lastFeedingTimeHour: false,
    lastFeedingTimeMinute: false,
    wateringCycle: false,
    lastWateringTimeHour: false,
    lastWateringTimeMinute: false,
    note: false,
  });
  const [form, setForm] = useState<CareFormType>({
    feedingCycle: 0,
    lastFeedingTimeHour: 0,
    lastFeedingTimeMinute: 0,
    wateringCycle: 0,
    lastWateringTimeHour: 0,
    lastWateringTimeMinute: 0,
    note: null,
  });

  const isFilled = useMemo(
    () =>
      Object.entries(form)
        .filter(([K]) => K !== "note")
        .every(([_, v]) => v !== 0),
    [form],
  );

  const isWarning = useMemo(
    () => Object.entries(disabled).every(([_, v]) => v === false),
    [disabled],
  );

  return (
    <s.Form>
      <s.Section>
        <CycleInput
          label="급여 주기"
          type="feedingCycle"
          setForm={setForm}
          setDisabled={setDisabled}
          disabled={disabled}
        />
        <LastCareTime
          label="마지막 급여 시간"
          type="lastFeedingTime"
          setForm={setForm}
          setDisabled={setDisabled}
          disabled={disabled}
        />
      </s.Section>
      <s.Section>
        <CycleInput
          label="물 교체 주기"
          type="wateringCycle"
          setForm={setForm}
          setDisabled={setDisabled}
          disabled={disabled}
        />
        <LastCareTime
          label="마지막 교체 시간"
          type="lastWateringTime"
          setForm={setForm}
          setDisabled={setDisabled}
          disabled={disabled}
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
          disabled={!(isFilled && isWarning)}
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
