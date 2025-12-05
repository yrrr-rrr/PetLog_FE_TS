import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/shared/backBtn/BackButton";
import * as s from "./style";
import { getGroupId } from "@/shared/getGroupid/getGroupId";
import { BaseModal } from "@/shared/baseModal/ui/baseModal";
import { useModal } from "@/shared/baseModal/store/modalStroe";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { sendToNative } from "@/features/nativeBootstrap/lib/nativeBridge";
import { leaveGroup } from "@/features/setting/lib/leaveGroup";
import { setNotification } from "@/features/setting/lib/setNotification";
import { getNotification } from "@/features/setting/lib/getNotification";

type ModalKeyType = "deleteAccount" | "logout" | "leaveGroup";

export function Setting() {
  const { isOpen, setIsOpen } = useModal();
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate();
  const { accessToken } = useNative();

  const [groupId, setGroupId] = useState(0);
  const [modalKey, setModalKey] = useState<ModalKeyType>("deleteAccount");
  const modalMessage = {
    deleteAccount: {
      message: "회원을 탈퇴 하시겠습니까?",
      action: () => sendToNative("DELETE_ACCOOUNT"),
    },
    logout: {
      message: "로그아웃 하시겠습니까?",
      action: () => sendToNative("LOGOUT"),
    },
    leaveGroup: {
      message: "그룹을 나가시겠습니까?",
      action: () => leaveGroup(accessToken ? accessToken : "", groupId, nav),
    },
  };

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    getNotification(setToggle, accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    getGroupId(setGroupId, accessToken);
  }, [accessToken]);

  return (
    <s.Main>
      <BackButton>설정</BackButton>
      <s.Ul>
        <s.Li>
          <p>알림 수신 여부</p>
          <s.Toggle
            $toggle={toggle}
            onClick={() => {
              if (!accessToken) {
                return;
              }
              setNotification(!toggle, accessToken);
              setToggle((prev) => !prev);
            }}
          >
            <s.ToggleBtn></s.ToggleBtn>
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
