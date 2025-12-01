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
import { useModal } from "@/shared/baseModal/store/modalStroe";
import { BaseModal } from "@/shared/baseModal/ui/baseModal";

type ModalKeyType = "deleteAccount" | "logout" | "leaveGroup";

export function Setting() {
  const { openModal } = useWarningModal();
  const { isOpen, setIsOpen } = useModal();
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate();
  const acc = localStorage.getItem("acc");
  const [groupId, setGroupId] = useState(0);
  const [modalKey, setModalKey] = useState<ModalKeyType>("deleteAccount");
  const modalMessage = {
    deleteAccount: {
      message: "회원을 탈퇴 하시겠습니까?",
      action: () => deleteAccount(),
    },
    logout: {
      message: "로그아웃 하시겠습니까?",
      action: () => logout(nav),
    },
    leaveGroup: {
      message: "그룹을 나가시겠습니까?",
      action: () => leaveGroup(openModal, acc ? acc : "", groupId, nav),
    },
  };

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
            setModalKey("leaveGroup");
            setIsOpen();
          }}
        >
          그룹 나가기
        </s.Li>
        <s.Li
          onClick={() => {
            setModalKey("logout");
            setIsOpen();
          }}
        >
          로그 아웃
        </s.Li>
      </s.Ul>
      <s.WithdrawBox
        onClick={() => {
          setModalKey("deleteAccount");
          setIsOpen();
        }}
      >
        탈퇴 하기
      </s.WithdrawBox>
      {isOpen && (
        <BaseModal
          message={modalMessage[modalKey].message}
          onClick={modalMessage[modalKey].action}
        />
      )}
    </s.Main>
  );
}
