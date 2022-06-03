import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname } from "../../utils";

type TypographyVisuallyHiddenElement = React.ElementRef<typeof Extend.span>;
export type TypographyVisuallyHiddenProps = ComponentPropsWithoutRef<typeof Extend.span> & {
  focusable?: boolean;
};

const ROOT = "VisuallyHidden";

export const TypographyVisuallyHidden = React.forwardRef<
  TypographyVisuallyHiddenElement,
  TypographyVisuallyHiddenProps
>(({ focusable = false, className: classNameProp, ...props }, ref) => {
  return (
    <Extend.span
      {...props}
      ref={ref}
      className={classNames(
        resolveClassname(ROOT),
        focusable && resolveClassname(ROOT, { modifier: "focusable" }),
        classNameProp
      )}
    />
  );
});
