import * as React from "react";
import { I18nProvider } from "../../utils";
import { ButtonContextConfig, ButtonProvider } from "./ButtonContext";
import { ButtonPrimary, ButtonPrimaryProps } from "./ButtonPrimary";
import { ButtonPlain, ButtonPlainProps } from "./ButtonPlain";
import { BaseButtonElement, ButtonComponentProps } from "./types";
import { ButtonCommon } from "./ButtonCommon";
import { ButtonOutline, ButtonOutlineProps } from "./ButtonOutline";
import { ButtonText } from "./ButtonText";
import { ButtonSpinner } from "./ButtonSpinner";
import { ButtonIcon } from "./ButtonIcon";

type DefaultButtonProps = ButtonComponentProps;

type PrimaryButtonProps = ButtonPrimaryProps & {
  primary?: true;
};

type PlainButtonProps = ButtonPlainProps & {
  plain?: true;
};

type OutlineButtonProps = ButtonOutlineProps & {
  outline?: true;
};

type ButtonElement = BaseButtonElement;
export type ButtonProps = (ButtonContextConfig & {
  children?: React.ReactNode;
}) &
  (DefaultButtonProps | PrimaryButtonProps | PlainButtonProps | OutlineButtonProps);

type ButtonComponent = React.ForwardRefExoticComponent<ButtonProps> & {
  Icon: typeof ButtonIcon;
  Text: typeof ButtonText;
  Spinner: typeof ButtonSpinner;
};

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      size = "medium",
      fullWidth,
      loading,
      disabled,
      pressed,
      textAlign,
      destructive,
      text,
      iconOnly,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const childMarkup = React.useMemo(() => {
      if ("primary" in props) {
        const { primary, ...rest } = props;
        return (
          <ButtonPrimary {...rest} ref={ref}>
            {children}
          </ButtonPrimary>
        );
      } else if ("plain" in props) {
        const { plain, ...rest } = props;
        return (
          <ButtonPlain {...rest} ref={ref}>
            {children}
          </ButtonPlain>
        );
      } else if ("outline" in props) {
        const { outline, ...rest } = props;
        return (
          <ButtonOutline {...rest} ref={ref}>
            {children}
          </ButtonOutline>
        );
      }
      return (
        <ButtonCommon {...props} ref={ref}>
          {children}
        </ButtonCommon>
      );
    }, [props, children, ref]);

    return (
      <I18nProvider>
        <ButtonProvider
          size={size}
          fullWidth={fullWidth}
          loading={loading}
          disabled={disabled}
          textAlign={textAlign}
          destructive={destructive}
          pressed={pressed}
          text={text}
          iconOnly={iconOnly}
        >
          {childMarkup}
        </ButtonProvider>
      </I18nProvider>
    );
  }
) as ButtonComponent;

Button.Icon = ButtonIcon;
Button.Text = ButtonText;
Button.Spinner = ButtonSpinner;
