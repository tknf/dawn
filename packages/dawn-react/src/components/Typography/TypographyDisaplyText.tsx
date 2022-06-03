import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname, useDataAttributes, variationName } from "../../utils";

type Size = "small" | "medium" | "large" | "extraLarge";

type TypographyDisplayTextElement = React.ElementRef<typeof Extend.p>;
export type TypographyDisplayTextProps = ComponentPropsWithoutRef<typeof Extend.p> & {
  size?: Size;
};

const ROOT = `DisplayText`;

export const TypographyDisplayText = React.forwardRef<TypographyDisplayTextElement, TypographyDisplayTextProps>(
  ({ size = "extraLarge", className: classNameProp, ...props }, ref) => {
    const attrs = useDataAttributes({ size });
    const className = classNames(
      resolveClassname(ROOT),
      resolveClassname(ROOT, { modifier: variationName("size", size) })
    );
    return <Extend.p {...props} className={className} {...attrs} ref={ref} />;
  }
);
