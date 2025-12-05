import { useForm } from "@/processes/groupEntry/store/formStore";
import { CareInfoForm } from "../careInfo/careInfoForm";
import { PetInfoForm } from "../petInfo/petInfoForm";
import * as s from "./style";
import { BackButton } from "@/shared/backBtn/BackButton";

export function MakeGroup() {
  const { step, setStep } = useForm();
  const pageInfoText = ["반려동물 기본 정보", "케어 정보"];

  return (
    <s.Main>
      <s.PageTitleSection>
        <BackButton
          func={() => {
            if (step === 2) {
              setStep("prev");
            }
          }}
        >
          {pageInfoText[step - 1]}
        </BackButton>
        <s.TextSection>
          <s.Notice>
            <span>*</span>표시가 있는 항목은 반드시 입력해야 합니다
          </s.Notice>
        </s.TextSection>
      </s.PageTitleSection>
      {step === 1 ? <PetInfoForm /> : <CareInfoForm />}
    </s.Main>
  );
}
