import * as React from "react";
import { classNames } from "../../utils";
import { ButtonCommon } from "./ButtonCommon";
import { BaseButtonElement, ButtonComponentProps } from "./types";
import { styles } from "./utils/styles";

type ButtonOutlineElement = BaseButtonElement;
export type ButtonOutlineProps = ButtonComponentProps;

export const ButtonOutline = React.forwardRef<ButtonOutlineElement, ButtonOutlineProps>(
  ({ className, ...props }, ref) => {
    return <ButtonCommon {...props} className={classNames(styles.Outline, className)} ref={ref} />;
  }
);
