import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname, useDataAttributes } from "../../utils";

type Variation = "underline" | "strikethrough" | "italic" | "strong" | "emphasis";

enum VariationName {
  Underline = "underline",
  Strikethrough = "strikethrough",
  Italic = "italic",
  Strong = "strong",
  Emphasis = "emphasis"
}

type TypographyInlineElement = React.ElementRef<typeof Extend.span>;
export type TypographyInlineProps = ComponentPropsWithoutRef<typeof Extend.span> & {
  variation?: Variation;
};

const ROOT = "Inline";

export const TypographyInline = React.forwardRef<TypographyInlineElement, TypographyInlineProps>(
  ({ className, style, variation, children, ...props }, ref) => {
    const Element = variationElement(variation);
    const attrs = useDataAttributes({
      variation
    });

    return (
      <Extend.span {...props} className={classNames(resolveClassname(ROOT), className)} {...attrs} ref={ref} extend>
        <Element>{children}</Element>
      </Extend.span>
    );
  }
);

function variationElement(variation?: Variation) {
  if (variation === VariationName.Italic) {
    return "i";
  } else if (variation === VariationName.Strikethrough) {
    return "s";
  } else if (variation === VariationName.Underline) {
    return "u";
  } else if (variation === VariationName.Strong) {
    return "strong";
  } else if (variation === VariationName.Emphasis) {
    return "em";
  }
  return "span";
}
