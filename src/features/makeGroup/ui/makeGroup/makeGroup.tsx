import { useForm } from "../../store/formStore";
import { CareInfoForm } from "../careInfo/careInfoForm";
import { PetInfoForm } from "../petInfo/petInfoForm";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { WarningModal } from "@/shared/warmingModal/ui/warningModal";

export function MakeGroup() {
  const { step, setStep } = useForm();
  const { isOpen } = useWarningModal();
  const pageInfoText = ["반려동물 기본 정보", "케어 정보"];
  const nav = useNavigate();
  return (
    <s.Main>
      <s.PageTitleSection>
        <s.BackBtn
          name="PrevBtn"
          width={24}
          onClick={() => {
            nav(-1);
            if (step === 2) {
              setStep("prev");
            }
          }}
        />
        <s.TextSection>
          <s.Title>{pageInfoText[step - 1]}</s.Title>
          <s.Notice>
            <span>*</span>표시가 있는 항목은 반드시 입력해야 합니다
          </s.Notice>
        </s.TextSection>
      </s.PageTitleSection>
      {isOpen && <WarningModal />}
      {step === 1 ? <PetInfoForm /> : <CareInfoForm />}
    </s.Main>
  );
}
