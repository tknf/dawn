import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname } from "../../utils";

type TypographyHeadingElement = React.ElementRef<typeof Extend.h2>;
export type TypographyHeadingProps = ComponentPropsWithoutRef<typeof Extend.h2> & {};

const ROOT = "Heading";

export const TypographyHeading = React.forwardRef<TypographyHeadingElement, TypographyHeadingProps>(
  ({ className, ...props }, ref) => {
    return <Extend.h2 {...props} className={classNames(resolveClassname(ROOT), className)} ref={ref} />;
  }
);
