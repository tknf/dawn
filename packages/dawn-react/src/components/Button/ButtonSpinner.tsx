import * as React from "react";
import { classNames, useI18n } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { Spinner } from "../Spinner";
import { styles } from "./utils/styles";

type ButtonSpinnerElement = React.ElementRef<typeof Extend.span>;
export type ButtonSpinnerProps = Omit<ComponentPropsWithoutRef<typeof Extend.span>, "children"> & {};

export const ButtonSpinner = React.forwardRef<ButtonSpinnerElement, ButtonSpinnerProps>(
  ({ className: classNameProp, ...props }, ref) => {
    const { translate } = useI18n();

    const className = classNames(styles.Spinner, classNameProp);
    return (
      <Extend.span {...props} className={className} ref={ref}>
        <Spinner size="small" aria-label={translate("Components.Button.Spinner.label")} />
      </Extend.span>
    );
  }
);
