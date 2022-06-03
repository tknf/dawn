import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { styles } from "./utils/styles";

type ButtonBackdropElement = React.ElementRef<typeof Extend.div>;
export type ButtonBackdropProps = Omit<ComponentPropsWithoutRef<typeof Extend.div>, "children">;

export const ButtonBackdrop = React.forwardRef<ButtonBackdropElement, ButtonBackdropProps>((props, ref) => {
  return <Extend.div {...props} className={classNames(styles.Backdrop, props.className)} ref={ref} />;
});
