import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { useButtonContext } from "./ButtonContext";
import { styles } from "./utils/styles";

type ButtonTextElement = React.ElementRef<typeof Extend.span>;
type ButtonTextProps = Omit<ComponentPropsWithoutRef<typeof Extend.span>, "children"> & {
  children?: string | string[];
};

export const ButtonText = React.forwardRef<ButtonTextElement, ButtonTextProps>(
  ({ children, className, ...props }, ref) => {
    const { disabled } = useButtonContext("ButtonText");

    return (
      <Extend.span
        {...props}
        key={disabled ? "text-disabled" : "text"}
        className={classNames(styles.Text, className)}
        ref={ref}
      >
        {children}
      </Extend.span>
    );
  }
);
