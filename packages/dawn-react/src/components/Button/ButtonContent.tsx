import * as React from "react";
import { classNames } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { styles } from "./utils/styles";

type ButtonContentElement = React.ElementRef<typeof Extend.div>;
export type ButtonContentProps = ComponentPropsWithoutRef<typeof Extend.div> & {};

export const ButtonContent = React.forwardRef<ButtonContentElement, ButtonContentProps>(
  ({ className, ...props }, ref) => {
    return <Extend.div {...props} className={classNames(styles.Content, className)} ref={ref} />;
  }
);
