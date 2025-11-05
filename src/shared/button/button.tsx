import type React from "react";
import { Btn } from "./style";

export function Button({
  children,
  onClick,
  disabled,
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  return (
    <Btn
      $disabled={disabled ? disabled : false}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
