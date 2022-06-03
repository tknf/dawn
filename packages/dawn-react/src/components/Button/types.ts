import { UnstyledButtonElement, UnstyledButtonProps } from "../Unstyled";

export type BaseButtonProps = UnstyledButtonProps & {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  textAlign?: "left" | "center" | "right";
  text?: string | string[];
  destructive?: boolean;
  iconOnly?: boolean;
};

export type ButtonContextProperties =
  | "size"
  | "fullWidth"
  | "loading"
  | "disabled"
  | "textAlign"
  | "destructive"
  | "text"
  | "pressed"
  | "iconOnly";

export type ButtonComponentProps = Omit<BaseButtonProps, ButtonContextProperties>;

export type BaseButtonElement = UnstyledButtonElement;
