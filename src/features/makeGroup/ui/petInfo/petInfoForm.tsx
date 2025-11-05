import { GetIcon } from "@/shared/getIcon/getIcon";
import * as s from "./style";
import React, { useMemo, useState } from "react";
import { Button } from "@/shared/button/button";
import { useForm, type PetInfo } from "../../store/formStore";

export function PetInfoForm() {
  const { setInfo, setStep } = useForm();
  const [imgUrl, setImgUrl] = useState("");
  const [inputWarning, setInputWarning] = useState([true, true, true]);
  const [firstWrite, setFirstWrite] = useState([false, false, false]);
  const [genderChecked, setGenderChecked] = useState({
    female: true,
    male: false,
  });
  const [form, setForm] = useState({
    imgUrl: "",
    name: "",
    age: "",
    weight: "",
    gender: "female",
  });
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

  const isWarning = useMemo(
    () => Object.entries(inputWarning).every(([_, v]) => v === false),
    [inputWarning],
  );
  const isTuched = useMemo(
    () => Object.entries(firstWrite).every(([_, v]) => v === true),
    [firstWrite],
  );
  const abled = isTuched && isWarning;

  return (
    <s.Form action="">
      <s.ProfileBox>
        {imgUrl ? (
          <s.Profile src={imgUrl} />
        ) : (
          <GetIcon name="DefaultProfile" width={150} />
        )}
        <div>
          <label htmlFor="file">
            <s.FileUploadBtn>프로필 사진 변경</s.FileUploadBtn>
          </label>
          <s.FileInput
            type="file"
            id="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  if (reader.result) {
                    setForm((prev) => {
                      const newObj = { ...prev };
                      if (reader.result) {
                        newObj.imgUrl = reader.result.toString();
                      }
                      return newObj;
                    });
                    setImgUrl(reader.result.toString());
                  }
                };
              }
            }}
          />
        </div>
      </s.ProfileBox>
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
                  setInputWarning((prev) => {
                    const newArr = [...prev];
                    newArr[idx] = value ? false : true;
                    return newArr;
                  });
                  setForm((prev) => {
                    const newObj = { ...prev };
                    newObj[obj.label as keyof PetInfo] = e.target.value;
                    return newObj;
                  });
                }}
                onClick={() => {
                  setFirstWrite((prev) => {
                    const newArr = [...prev];
                    newArr[idx] = true;
                    return newArr;
                  });
                }}
              />
            </s.InputDiv>
            <s.WarningMassage>
              {firstWrite[idx] && inputWarning[idx]
                ? "해당 항목은 비워둘 수 없습니다"
                : ""}
            </s.WarningMassage>
          </s.InputBox>
        ))}
      </s.WritingSection>
      <s.GenderSection>
        <s.GenderLabel>성별</s.GenderLabel>
        <s.GenderBox>
          <s.GenderBtn
            $checked={genderChecked.female}
            $gender="female"
            onClick={() => {
              genderhandle("female", setGenderChecked);

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
              genderhandle("male", setGenderChecked);
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
      <s.BtnBox>
        <Button
          disabled={!abled}
          onClick={(e) => {
            e.preventDefault();
            setInfo(form);
            setStep("next");
          }}
        >
          다음
        </Button>
      </s.BtnBox>
    </s.Form>
  );
}

function genderhandle(
  gender: string,
  setGenderChecked: React.Dispatch<
    React.SetStateAction<{ female: boolean; male: boolean }>
  >,
) {
  setGenderChecked((prev) => {
    const newObj = { ...prev };
    newObj.female = gender == "female" ? true : false;
    newObj.male = gender == "female" ? false : true;
    return newObj;
  });
}
