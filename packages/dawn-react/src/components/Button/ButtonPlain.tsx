import * as React from "react";
import { classNames, resolveClassname, useDataAttributes } from "../../utils";
import { ButtonCommon } from "./ButtonCommon";
import { BaseButtonElement, ButtonComponentProps } from "./types";
import { styles } from "./utils/styles";

type ButtonPlainElement = BaseButtonElement;
export type ButtonPlainProps = ButtonComponentProps & {
  monochrome?: boolean;
  removeUnderline?: boolean;
};

export const ButtonPlain = React.forwardRef<ButtonPlainElement, ButtonPlainProps>(
  ({ monochrome, removeUnderline, className: classNameProp, ...props }, ref) => {
    const attrs = useDataAttributes({ monochrome, removeUnderline });
    const className = classNames(
      monochrome && resolveClassname(styles.Root, { modifier: "monochrome" }),
      removeUnderline && resolveClassname(styles.Root, { modifier: "remove-underline" }),
      classNameProp
    );
    return <ButtonCommon {...props} {...attrs} className={classNames(styles.Plain, className)} ref={ref} />;
  }
);
