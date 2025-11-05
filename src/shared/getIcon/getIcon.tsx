import { forwardRef } from "react";
import * as icons from "@/shared/getIcon/icons";

export interface IconProps {
  name: keyof typeof icons;
  width: number;
  onClick?: () => void;
}

export const GetIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, width, onClick, ...rest }, ref) => {
    const SvgIcon = icons[name];
    return <SvgIcon ref={ref} width={width} onClick={onClick} {...rest} />;
  },
);
