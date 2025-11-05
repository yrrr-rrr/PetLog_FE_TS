import { Button } from "@/shared/button/button";
import React, { useState } from "react";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { WarningModal } from "@/shared/warmingModal/ui/warningModal";
import * as s from "./style";
import { BackButton } from "@/shared/backBtn/BackButton";
import { useNavigate } from "react-router-dom";

export function JoinGroup() {
  const { openModal, isOpen } = useWarningModal();
  const [isReject, setIsReject] = useState(false);
  const [code, setCode] = useState("");
  const nav = useNavigate();
  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav("-1");
        }}
      >
        뒤로 가기
      </BackButton>
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
            setIsReject(false);
            joinGroup(code, setIsReject, openModal);
          }}
        >
          확인
        </Button>
      </s.CodeSection>
    </s.Main>
  );
}

async function joinGroup(
  code: string,
  setIsReject: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: (message: string) => void,
) {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joinCode: code,
      }),
    });
    if (!response.ok) {
      setIsReject(true);
    }
  } catch (e) {
    openModal("전송 오류가 발생했습니다");
  }
}
