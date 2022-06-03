import * as React from "react";
import { Unstyled } from "../Unstyled";
import { classNames, resolveClassname, variationName } from "../../utils";
import { ButtonBackdrop } from "./ButtonBackdrop";
import { useButtonContext } from "./ButtonContext";
import { ButtonText } from "./ButtonText";
import { BaseButtonElement, ButtonComponentProps } from "./types";
import { styles } from "./utils/styles";
import { ButtonContent } from "./ButtonContent";
import { ButtonSpinner } from "./ButtonSpinner";

type ButtonCommonElement = BaseButtonElement;
export type ButtonCommonProps = ButtonComponentProps;

export const ButtonCommon = React.forwardRef<ButtonCommonElement, ButtonCommonProps>(
  ({ children, className, ...props }, ref) => {
    const { disabled, loading, fullWidth, textAlign, pressed, size, destructive, text, iconOnly } =
      useButtonContext("ButtonCommon");
    const isDisabled = disabled || loading;
    const buttonClassName = classNames(
      styles.Root,
      size && resolveClassname(styles.Root, { modifier: variationName("size", size) }),
      fullWidth && resolveClassname(styles.Root, { modifier: "full-width" }),
      textAlign && resolveClassname(styles.Root, { modifier: variationName("text-align", textAlign) }),
      isDisabled && resolveClassname(styles.Root, { modifier: "disabled" }),
      loading && resolveClassname(styles.Root, { modifier: "loading" }),
      destructive && resolveClassname(styles.Root, { modifier: "destructive" }),
      pressed && resolveClassname(styles.Root, { modifier: "pressed" }),
      iconOnly && resolveClassname(styles.Root, { modifier: "icon-only" }),
      className
    );

    const textMarkup = text ? <ButtonText>{text}</ButtonText> : null;
    const spinnerMarkup = loading ? <ButtonSpinner /> : null;
    const childMarkup = children ? (
      <ButtonContent>{children}</ButtonContent>
    ) : (
      <ButtonContent>
        {textMarkup}
        {spinnerMarkup}
      </ButtonContent>
    );

    return (
      <Unstyled.Button
        {...(props as any)}
        className={buttonClassName}
        loading={loading}
        disabled={isDisabled}
        pressed={pressed}
        ref={ref}
      >
        {childMarkup}
        <ButtonBackdrop />
      </Unstyled.Button>
    );
  }
);
