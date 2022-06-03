import * as React from "react";
import { classNames } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { styles } from "./utils/styles";

type IconSvgElement = React.ElementRef<typeof Extend.svg>;
export type IconSvgProps = ComponentPropsWithoutRef<typeof Extend.svg>;

export const IconSvg = React.forwardRef<IconSvgElement, IconSvgProps>(({ className, ...props }, ref) => {
  return (
    <Extend.svg
      {...props}
      className={classNames(styles.Svg, className)}
      focusable="false"
      aria-hidden="true"
      ref={ref}
    />
  );
});
