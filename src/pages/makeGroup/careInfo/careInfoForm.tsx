import { useMemo, useState } from "react";
import * as s from "./style";
import { Button } from "@/shared/button/button";
import { CycleInput } from "./container/cycleInput";
import { LastCareTime } from "./container/lastCareTime";
import { handleS3ImgUrl } from "@/shared/s3/handleS3ImgUrl";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { useForm } from "@/processes/groupEntry/store/formStore";
import type { CareFormType } from "@/features/makeGroup/type";
import { postGroupInfo } from "@/features/makeGroup/lib/postGroupInfo";

export function CareInfoForm() {
  const { petInfo } = useForm();
  const { accessToken } = useNative();
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
      <s.InputSection>
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
      </s.InputSection>
      <Button
        disabled={!(isFilled && isWarning)}
        onClick={async (e) => {
          e.preventDefault();
          const imgArr = petInfo.imgUrl == null ? null : [petInfo.imgUrl];
          const url = await handleS3ImgUrl(
            imgArr,
            accessToken,
            "PROFILE_IMAGE",
          );

          postGroupInfo(petInfo, form, url[0], accessToken);
        }}
      >
        확인
      </Button>
    </s.Form>
  );
}
