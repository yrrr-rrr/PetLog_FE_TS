import { Button } from "@/shared/button/button";
import { useState } from "react";
import { useWarningModal } from "@/shared/warningModal/store/warningModalStore";
import { WarningModal } from "@/shared/warningModal/ui/warningModal";
import * as s from "./style";
import { BackButton } from "@/shared/backBtn/BackButton";
import { joinGroup } from "../lib/joinGroup";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";

export function JoinGroup() {
  const { openModal, isOpen } = useWarningModal();
  const [isReject, setIsReject] = useState(false);
  const [code, setCode] = useState("");
  const { accessToken } = useNative();

  return (
    <s.Main>
      <BackButton>뒤로 가기</BackButton>
      {isOpen && <WarningModal />}
      <s.CodeSection>
        <s.Title>그룹원에게 받은 초대 코드를 입력해 주세요</s.Title>
        <s.InputBox>
          <s.Input
            type="text"
            maxLength={6}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setCode(value);
            }}
          />
          {isReject && (
            <s.WarningMassage>
              코드를 다시 한번 확인 후 입력해주세요
            </s.WarningMassage>
          )}
        </s.InputBox>
        <Button
          disabled={false}
          onClick={() => {
            if (!accessToken) {
              return;
            }
            setIsReject(false);
            joinGroup(code, setIsReject, openModal, accessToken);
          }}
        >
          확인
        </Button>
      </s.CodeSection>
    </s.Main>
  );
}
