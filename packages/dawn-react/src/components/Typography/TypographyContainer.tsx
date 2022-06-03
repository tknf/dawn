import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname, useDataAttributes, variationName } from "../../utils";

type Spacing = "tight" | "loose";

type TypographyContainerElement = React.ElementRef<typeof Extend.div>;
export type TypographyContainerProps = ComponentPropsWithoutRef<typeof Extend.div> & {
  spacing?: Spacing;
};

const ROOT = "TextContainer";

export const TypographyContainer = React.forwardRef<TypographyContainerElement, TypographyContainerProps>(
  ({ spacing, className: classNameProp, ...props }, ref) => {
    const attrs = useDataAttributes({
      spacing
    });
    const className = classNames(
      resolveClassname(ROOT),
      spacing && resolveClassname(ROOT, { modifier: variationName("spacing", spacing) }),
      classNameProp
    );
    return <Extend.div {...props} className={classNames(className)} {...attrs} ref={ref} />;
  }
);
