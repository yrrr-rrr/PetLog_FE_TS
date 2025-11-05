import { Button } from "@/shared/button/button";
import { useWarningModal } from "../store/warningModalStore";
import { useLocation } from "react-router-dom";
import { useForm } from "@/features/makeGroup/store/formStore";

export function WarningModal() {
  const { setStep } = useForm();
  const { warningMessage, closeModal } = useWarningModal();
  const path = useLocation().pathname;

  return (
    <div>
      <p>{warningMessage}</p>
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
    </div>
  );
}
