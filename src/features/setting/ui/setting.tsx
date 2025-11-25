import { setNotification } from "../lib/setNotification";
import { useWarningModal } from "@/shared/warmingModal/store/warningModalStore";
import { useEffect, useState } from "react";
import { deleteAccount } from "../lib/deleteAccount";
import { leaveGroup } from "../lib/leaveGroup";
import { useNavigate } from "react-router-dom";
import { logout } from "../lib/logout";
import { BackButton } from "@/shared/backBtn/BackButton";
import * as s from "./style";
import { getNotification } from "../lib/getNotification";

export function Setting() {
  const { openModal } = useWarningModal();
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    getNotification(setToggle, openModal);
  }, [openModal]);

  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        설정
      </BackButton>
      <s.Ul>
        <s.Li>
          <p>알림 수신 여부</p>
          <s.Toggle
            $toggle={toggle}
            onClick={() => {
              setToggle((prev) => !prev);
              setNotification(toggle, openModal);
            }}
          >
            <div></div>
          </s.Toggle>
        </s.Li>
        <s.Li
          onClick={() => {
            leaveGroup(openModal);
          }}
        >
          그룹 나가기
        </s.Li>
        <s.Li
          onClick={() => {
            logout(nav);
          }}
        >
          로그 아웃
        </s.Li>
      </s.Ul>
      <s.WithdrawBox
        onClick={() => {
          deleteAccount(openModal);
        }}
      >
        탈퇴 하기
      </s.WithdrawBox>
    </s.Main>
  );
}
