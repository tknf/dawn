import * as React from "react";
import { classNames } from "../../utils";
import { ButtonCommon } from "./ButtonCommon";
import { BaseButtonElement, ButtonComponentProps } from "./types";
import { styles } from "./utils/styles";

type ButtonPrimaryElement = BaseButtonElement;
export type ButtonPrimaryProps = ButtonComponentProps;

export const ButtonPrimary = React.forwardRef<ButtonPrimaryElement, ButtonPrimaryProps>(
  ({ className, ...props }, ref) => {
    return <ButtonCommon {...props} className={classNames(styles.Primary, className)} ref={ref} />;
  }
);
