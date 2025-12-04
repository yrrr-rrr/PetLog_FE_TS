import type React from "react";
import {
  handleForm,
  handleOnChange,
} from "@/features/makeGroup/lib/handleForm";
import type { PetInfo } from "@/features/makeGroup/type";
import * as s from "@/pages/makeGroup/petInfo/style";

export function InputSection({
  setForm,
  inputWarning,
  setInputWarning,
}: {
  setForm: React.Dispatch<React.SetStateAction<PetInfo>>;
  inputWarning: Record<keyof PetInfo, boolean>;
  setInputWarning: React.Dispatch<
    React.SetStateAction<Record<keyof PetInfo, boolean>>
  >;
}) {
  const inputs = [
    {
      label: "name",
      title: "이름",
      placeholder: "이름을 입력해주세요",
    },
    {
      label: "age",
      title: "나이",
      placeholder: "나이를 입력해주세요 (ex 1살, 1개월)",
    },
    {
      label: "weight",
      title: "몸무게",
      placeholder: "몸무게를 입력해 주세요 (ex 3kg, 300g)",
    },
  ];
  return (
    <s.WritingSection>
      {inputs.map((obj, idx) => (
        <s.InputBox key={idx}>
          <s.InputDiv>
            <s.Label>
              {obj.title}
              <span>*</span>
            </s.Label>
            <s.Input
              type="text"
              maxLength={
                obj.label === "name" ? 10 : obj.label === "age" ? 4 : 6
              }
              placeholder={obj.placeholder}
              onChange={(e) => {
                const value = e.target.value;
                handleForm(obj.label as keyof PetInfo, value, setForm);
                handleOnChange(
                  obj.label as keyof PetInfo,
                  value,
                  setInputWarning,
                );
              }}
            />
          </s.InputDiv>
          <s.WarningMassage>
            {inputWarning[obj.label as keyof PetInfo]
              ? "해당 항목은 비워둘 수 없습니다"
              : ""}
          </s.WarningMassage>
        </s.InputBox>
      ))}
    </s.WritingSection>
  );
}
