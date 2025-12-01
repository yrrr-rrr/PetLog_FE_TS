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
import { getGroupId } from "@/shared/getGroupid/getGroupId";

export function Setting() {
  const { openModal } = useWarningModal();
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate();
  const acc = localStorage.getItem("acc");
  const [groupId, setGroupId] = useState(0);

  useEffect(() => {
    if (!acc) {
      return;
    }
    getNotification(setToggle, openModal, acc);
  }, [acc, openModal]);

  useEffect(() => {
    if (!acc) {
      return;
    }
    getGroupId(setGroupId, acc);
  }, [acc]);

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
              if (!acc) {
                return;
              }
              setNotification(!toggle, openModal, acc);
              setToggle((prev) => !prev);
            }}
          >
            <div></div>
          </s.Toggle>
        </s.Li>
        <s.Li
          onClick={() => {
            if (!acc) {
              return;
            }
            leaveGroup(openModal, acc, groupId, nav);
          }}
        >
          그룹 나가기
        </s.Li>
        <s.Li
          onClick={() => {
            if (!acc) {
              return;
            }
            logout(nav);
          }}
        >
          로그 아웃
        </s.Li>
      </s.Ul>
      <s.WithdrawBox
        onClick={() => {
          if (!acc) {
            return;
          }
          deleteAccount();
        }}
      >
        탈퇴 하기
      </s.WithdrawBox>
    </s.Main>
  );
}
