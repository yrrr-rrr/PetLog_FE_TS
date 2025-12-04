import React, { useState } from "react";
import { GetIcon } from "@/shared/getIcon/getIcon";
import { genderHandle } from "@/features/makeGroup/lib/genderHandle";
import type { PetInfo } from "@/features/makeGroup/type";
import * as s from "@/pages/makeGroup/petInfo/style";

export function Gender({
  setForm,
}: {
  setForm: React.Dispatch<React.SetStateAction<PetInfo>>;
}) {
  const [genderChecked, setGenderChecked] = useState({
    female: true,
    male: false,
  });
  return (
    <s.GenderSection>
      <s.GenderLabel>성별</s.GenderLabel>
      <s.GenderBox>
        <s.GenderBtn
          $checked={genderChecked.female}
          $gender="female"
          onClick={() => {
            genderHandle("female", setGenderChecked);
            setForm((prev) => {
              const newObj = { ...prev };
              newObj.gender = "FEMALE";
              return newObj;
            });
          }}
        >
          <GetIcon name="Female" width={25} />
        </s.GenderBtn>
        <s.GenderBtn
          $checked={genderChecked.male}
          $gender="male"
          onClick={() => {
            genderHandle("male", setGenderChecked);
            setForm((prev) => {
              const newObj = { ...prev };
              newObj.gender = "MALE";
              return newObj;
            });
          }}
        >
          <GetIcon name="Male" width={25} />
        </s.GenderBtn>
      </s.GenderBox>
    </s.GenderSection>
  );
}
