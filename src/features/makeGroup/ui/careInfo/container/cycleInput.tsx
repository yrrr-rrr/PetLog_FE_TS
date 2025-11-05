import * as s from "@/features/makeGroup/ui/careInfo/style";
import type React from "react";
import type { CareDisabledObj } from "../type";
import { useEffect, useState } from "react";
import type { CareInfo } from "@/features/makeGroup/store/formStore";

export function CycleInput(props: Props) {
  const { label, type, setForm, setDisabled } = props;
  const [warning, setWarning] = useState(true);
  const [firstWrite, setFirstWrite] = useState(false);

  useEffect(() => {
    if (!warning && firstWrite) {
      setDisabled((prev) => {
        if (type === "meal") {
          if (prev.feedingCycle === false) {
            return prev;
          }
          return { ...prev, feedingCycle: false };
        } else {
          if (prev.wateringCycle === false) {
            return prev;
          }
          return { ...prev, wateringCycle: false };
        }
      });
    } else {
      setDisabled((prev) => {
        if (type === "meal") {
          if (prev.feedingCycle === true) {
            return prev;
          }
          return { ...prev, feedingCycle: true };
        } else {
          if (prev.wateringCycle === true) {
            return prev;
          }
          return { ...prev, wateringCycle: true };
        }
      });
    }
  }, [firstWrite, warning, setDisabled, type]);

  return (
    <s.InputBox>
      <s.InputInfoBox>
        <s.Label>
          {label}
          <span>*</span>
        </s.Label>
        <s.Description>
          시간은 24시간 기준으로 작성해 주세요 (ex 17:30)
        </s.Description>
      </s.InputInfoBox>
      <s.TimeBox>
        <s.Input
          type="text"
          onChange={(e) => {
            const value = Number(e.target.value);
            setForm((prev) => {
              if (type === "meal") {
                return { ...prev, feedingCycle: value };
              } else {
                return { ...prev, wateringCycle: value };
              }
            });
            setWarning(value ? false : true);
            setFirstWrite(true);
          }}
        />
        <span>시간</span>
      </s.TimeBox>
      {warning && firstWrite && (
        <s.WarningMassage>
          해당 항목은 비워두거나 한글을 입력할 수 없습니다
        </s.WarningMassage>
      )}
    </s.InputBox>
  );
}

type Props = {
  label: string;
  type: string;
  setForm: React.Dispatch<React.SetStateAction<CareInfo>>;
  setDisabled: React.Dispatch<React.SetStateAction<CareDisabledObj>>;
};
