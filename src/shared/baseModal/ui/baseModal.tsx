import { useLocation } from "react-router-dom";
import { Button } from "../../button/button";
import { useModal } from "../store/modalStroe";
import * as s from "./style";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";

export function BaseModal({
  message,
  onClick,
}: {
  message: string;
  onClick: () => void;
}) {
  const { nativeRoute } = useNative();
  const currentPath = useLocation().pathname;
  const { setClose } = useModal();
  return (
    <s.Background>
      <s.Modal>
        {`${currentPath}, ${nativeRoute}`}
        <s.Message>{message}</s.Message>
        <s.BtnDiv>
          <Button
            color="gray"
            onClick={() => {
              setClose();
            }}
          >
            닫기
          </Button>
          <Button
            color="yellow"
            onClick={() => {
              onClick();
            }}
          >
            확인
          </Button>
        </s.BtnDiv>
      </s.Modal>
    </s.Background>
  );
}
