import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { BaseUnstyledButtonProps } from "./types";
import { UnstyledLink } from "./UnstyledLink";

export type UnstyledButtonElement = React.ElementRef<typeof Extend.a> | React.ElementRef<typeof Extend.button>;
type LinkButtonProps = BaseUnstyledButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Extend.a>, "href" | "target" | "rel">;
type ButtonProps = BaseUnstyledButtonProps & Omit<ComponentPropsWithoutRef<typeof Extend.button>, "type" | "form">;
export type UnstyledButtonProps = LinkButtonProps | ButtonProps;

export const UnstyledButton = React.forwardRef<UnstyledButtonElement, UnstyledButtonProps>(
  (
    { id, url, external, download, submit, disabled, loading, pressed, className, children, ...props },
    forwardedRef
  ) => {
    let buttonMarkup;
    const commonProps = {
      id,
      className
    };

    if (url) {
      const ref = forwardedRef as React.ForwardedRef<React.ElementRef<typeof Extend.a>>;
      if (disabled) {
        buttonMarkup = (
          <Extend.a {...commonProps} ref={ref}>
            {children}
          </Extend.a>
        );
      } else {
        const rest = props as LinkButtonProps;
        buttonMarkup = (
          <UnstyledLink {...commonProps} url={url} external={external} download={download} {...rest} ref={ref}>
            {children}
          </UnstyledLink>
        );
      }
    } else {
      const ref = forwardedRef as React.ForwardedRef<React.ElementRef<typeof Extend.button>>;
      const rest = props as ButtonProps;
      buttonMarkup = (
        <Extend.button
          {...commonProps}
          type={submit ? "submit" : "button"}
          disabled={disabled}
          aria-busy={loading ? true : undefined}
          aria-pressed={pressed}
          ref={ref}
          {...rest}
        >
          {children}
        </Extend.button>
      );
    }
    return buttonMarkup;
  }
);
