import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname, useDataAttributes } from "../../utils";

type TypographyClampElement = React.ElementRef<typeof Extend.div>;
export type TypographyClampProps = ComponentPropsWithoutRef<typeof Extend.div> & {
  line?: number;
};

const ROOT = "Clamp";

export const TypographyClamp = React.forwardRef<TypographyClampElement, TypographyClampProps>(
  ({ line = 3, className, style, ...props }, ref) => {
    const attrs = useDataAttributes({
      line: String(line)
    });
    return (
      <Extend.div
        {...props}
        className={classNames(resolveClassname(ROOT), className)}
        {...attrs}
        style={{
          WebkitLineClamp: line,
          ...style
        }}
        ref={ref}
      />
    );
  }
);
