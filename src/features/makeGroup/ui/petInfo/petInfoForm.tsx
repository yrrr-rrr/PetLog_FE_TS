import { useMemo, useState } from "react";
import { Button } from "@/shared/button/button";
import { useForm } from "../../store/formStore";
import type { PetInfo } from "../../type";
import { Gender } from "./container/Gender";
import { InputSection } from "./container/InputSection";
import { Profile } from "./container/Profile";
import * as s from "./style";

export function PetInfoForm() {
  const { setInfo, setStep } = useForm();

  const [inputWarning, setInputWarning] = useState({
    imgUrl: false,
    name: false,
    age: false,
    weight: false,
    gender: false,
  });
  const [form, setForm] = useState<PetInfo>({
    imgUrl: "",
    name: "",
    age: "",
    weight: "",
    gender: "FEMALE",
  });

  const isWarning = useMemo(
    () => Object.entries(inputWarning).every(([_, v]) => v === false),
    [inputWarning],
  );
  const isFilled = useMemo(
    () =>
      Object.entries(form)
        .filter(([K]) => K !== "imgUrl")
        .every(([_, v]) => v.trim() !== ""),
    [form],
  );

  return (
    <s.Form action="">
      <Profile setForm={setForm} />
      <InputSection
        inputWarning={inputWarning}
        setForm={setForm}
        setInputWarning={setInputWarning}
      />
      <Gender setForm={setForm} />
      <s.BtnBox>
        <Button
          disabled={!(isWarning && isFilled)}
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
