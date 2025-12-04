import * as s from "@/pages/makeGroup/careInfo/style";
import type React from "react";
import {
  handleForm,
  handleOnChange,
} from "@/features/makeGroup/lib/handleForm";
import type { CareFormType } from "@/features/makeGroup/type";

export function CycleInput(props: Props) {
  const { label, type, setForm, setDisabled, disabled } = props;
  const key = type as keyof CareFormType;
  return (
    <s.InputBox>
      <s.InputInfoBox>
        <s.Label>
          {label}
          <span>*</span>
        </s.Label>
        <s.Description>
          시간은 24시간 기준으로 작성해 주세요 (ex 5시 → 17시)
        </s.Description>
      </s.InputInfoBox>
      <s.TimeBox>
        <s.Input
          type="text"
          maxLength={2}
          onChange={(e) => {
            const value = Number(e.target.value);
            handleForm(key, value, setForm);
            handleOnChange(key, value, setDisabled);
          }}
        />
        <span>시간</span>
      </s.TimeBox>
      {disabled[key] && (
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
  setForm: React.Dispatch<React.SetStateAction<CareFormType>>;
  setDisabled: React.Dispatch<
    React.SetStateAction<Record<keyof CareFormType, boolean>>
  >;
  disabled: Record<keyof CareFormType, boolean>;
};
