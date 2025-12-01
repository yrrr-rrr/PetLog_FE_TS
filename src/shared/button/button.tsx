import type React from "react";
import { Btn } from "./style";

export function Button({
  children,
  onClick,
  disabled,
  color,
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: string;
}) {
  return (
    <Btn
      $disabled={disabled ? disabled : false}
      $color={color ? color : ""}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
