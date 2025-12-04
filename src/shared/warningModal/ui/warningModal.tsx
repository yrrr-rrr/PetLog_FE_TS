import { Button } from "@/shared/button/button";
import { useWarningModal } from "../store/warningModalStore";
import { useLocation } from "react-router-dom";
import { useForm } from "@/features/makeGroup/store/formStore";
import * as s from "./style";

export function WarningModal() {
  const { setStep } = useForm();
  const { warningMessage, closeModal } = useWarningModal();
  const path = useLocation().pathname;

  return (
    <s.Background>
      <s.Modal>
        <s.Message>{warningMessage}</s.Message>
        <Button
          onClick={() => {
            if (path == "/makegroup") {
              setStep("prev");
            }
            closeModal();
          }}
        >
          닫기
        </Button>
      </s.Modal>
    </s.Background>
  );
}
