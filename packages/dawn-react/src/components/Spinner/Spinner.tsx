import * as React from "react";
import { classNames, resolveClassname, useIsAfterInitialMount, variationName } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { Typography } from "../Typography";

type Size = "small" | "large";

type SpinnerElement = React.ElementRef<typeof Extend.span>;
export type SpinnerProps = Omit<ComponentPropsWithoutRef<typeof Extend.span>, "children"> & {
  size?: Size;
  hasFocusableParent?: boolean;
};

const ROOT = "Spinner";
const styles = {
  Root: resolveClassname(ROOT),
  Content: resolveClassname(ROOT, { element: "Content" })
};

export const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>(
  ({ size = "large", hasFocusableParent, "aria-label": ariaLabel, className: classNameProp, ...props }, ref) => {
    const isAfterInitialMount = useIsAfterInitialMount();

    const className = classNames(
      styles.Root,
      size && resolveClassname(styles.Root, { modifier: variationName("size", size) })
    );

    const spinnerMarkup = (
      <Extend.span {...props} className={className} ref={ref}>
        <Extend.span className={styles.Content} />
      </Extend.span>
    );

    const accessibilityMarkup = (isAfterInitialMount || !hasFocusableParent) && (
      <Typography.VisuallyHidden>{ariaLabel}</Typography.VisuallyHidden>
    );

    return (
      <React.Fragment>
        {spinnerMarkup}
        <Extend.span {...(!hasFocusableParent && { role: "status" })}>{accessibilityMarkup}</Extend.span>
      </React.Fragment>
    );
  }
);
