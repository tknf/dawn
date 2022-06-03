import * as React from "react";
import { classNames, resolveClassname, variationName } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { IconSource } from "../types";
import { Typography } from "../Typography";
import { IconSvg } from "./IconSvg";
import { styles } from "./utils/styles";

type Color = "subdued" | "error" | "warning" | "success" | "primary";

type IconElement = React.ElementRef<typeof Extend.span>;
export type IconProps = ComponentPropsWithoutRef<typeof Extend.span> & {
  source: IconSource;
  color?: Color;
  backdrop?: boolean;
};

export const Icon = React.forwardRef<IconElement, IconProps>(
  ({ source, color, backdrop, className: classNameProp, "aria-label": ariaLabel, ...props }, ref) => {
    let sourceType: "function" | "placeholder" | "external";
    if (typeof source === "function" || typeof source === "object") {
      sourceType = "function";
    } else if (source === "placeholder") {
      sourceType = "placeholder";
    } else {
      sourceType = "external";
    }

    if (color && sourceType === "external" && process?.env?.NODE_ENV === "development") {
      console.warn(`Recoloring externsl SVGs is not supported.`);
    }

    const className = classNames(
      styles.Root,
      color && resolveClassname(styles.Root, { modifier: variationName("color", color) }),
      color && resolveClassname(styles.Root, { modifier: "apply-color" }),
      backdrop && resolveClassname(styles.Root, { modifier: "has-backdrop" }),
      classNameProp
    );

    const SourceComponent = source;
    const contentMarkup = {
      function: (
        <IconSvg extend>
          <SourceComponent />
        </IconSvg>
      ),
      placeholder: <div className={styles.Placeholder} />,
      external: <img className={styles.Img} src={`data:image/svg+xml;utf8,${source}`} alt="" aria-hidden="true" />
    };

    return (
      <Extend.span {...props} className={className} ref={ref}>
        <Typography.VisuallyHidden>{ariaLabel}</Typography.VisuallyHidden>
        {contentMarkup[sourceType]}
      </Extend.span>
    );
  }
);
