import type React from "react";
import { GetIcon } from "../getIcon/getIcon";
import * as s from "./style";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { useLocation, useNavigate } from "react-router-dom";
import { sendToNative } from "@/features/nativeBootstrap/lib/nativeBridge";

export function BackButton({
  children,
  func,
}: {
  children: string;
  func?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { nativeRoute } = useNative();
  const currentPath = useLocation().pathname;
  const nav = useNavigate();

  return (
    <s.BackBtn
      onClick={(e) => {
        alert(`${currentPath}, ${nativeRoute}`);
        if (currentPath !== nativeRoute) {
          nav(-1);
        } else {
          sendToNative("CLOSE_WEBVIEW");
        }
        func?.(e);
      }}
    >
      <GetIcon name="PrevBtn" width={24} />
      <s.Title>{children}</s.Title>
    </s.BackBtn>
  );
}
