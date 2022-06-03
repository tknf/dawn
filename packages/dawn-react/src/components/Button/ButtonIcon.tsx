import * as React from "react";
import { classNames, resolveClassname } from "../../utils";
import { Extend } from "../Extend";
import { Icon, IconProps } from "../Icon";
import { styles } from "./utils/styles";

type ButtonIconElement = React.ElementRef<typeof Extend.span>;
export type ButtonIconProps = IconProps;

export const ButtonIcon = React.forwardRef<ButtonIconElement, ButtonIconProps>(
  ({ source, className, ...props }, ref) => {
    return (
      <Icon {...props} source={source} className={classNames(resolveClassname(styles.Icon), className)} ref={ref} />
    );
  }
);
