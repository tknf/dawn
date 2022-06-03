import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname, variationName } from "../../utils";

type Variation = "positive" | "negative" | "warning" | "strong" | "muted" | "code";

enum VariationValue {
  Positive = "positive",
  Negative = "negative",
  Warning = "warning",
  Strong = "strong",
  Muted = "muted",
  Code = "code"
}

type TypographyStyleElement = React.ElementRef<typeof Extend.span>;
export type TypographyStyleProps = ComponentPropsWithoutRef<typeof Extend.span> & {
  variation?: Variation;
};

const ROOT = "TextStyle";

export const TypographyStyle = React.forwardRef<TypographyStyleElement, TypographyStyleProps>(
  ({ variation, className: classNameProp, children, ...props }, ref) => {
    const Element = variationElement(variation);

    const className = classNames(
      resolveClassname(ROOT),
      variation && resolveClassname(ROOT, { modifier: variationName("variation", variation) })
    );

    return (
      <Extend.span {...props} className={className} ref={ref} extend>
        <Element>{children}</Element>
      </Extend.span>
    );
  }
);

function variationElement(variation?: Variation) {
  return variation === VariationValue.Code ? "code" : "span";
}
