import type React from "react";
import { GetIcon } from "../getIcon/getIcon";
import * as s from "./style";

export function BackButton({
  children,
  onClick,
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <s.BackBtn onClick={onClick}>
      <GetIcon name="PrevBtn" width={24} />
      <s.Title>{children}</s.Title>
    </s.BackBtn>
  );
}
