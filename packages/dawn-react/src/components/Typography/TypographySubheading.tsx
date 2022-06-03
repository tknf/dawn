import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname } from "../../utils";

type TypographySubheadingElement = React.ElementRef<typeof Extend.h3>;
export type TypographySubheadingProps = ComponentPropsWithoutRef<typeof Extend.h3> & {};

const ROOT = "Subheading";

export const TypographySubheading = React.forwardRef<TypographySubheadingElement, TypographySubheadingProps>(
  ({ className, ...props }, ref) => {
    return <Extend.h3 {...props} className={classNames(resolveClassname(ROOT), className)} ref={ref} />;
  }
);
