import { createContext } from "../../utils";
import { BaseButtonProps, ButtonContextProperties } from "./types";

export type ButtonContextConfig = Pick<BaseButtonProps, ButtonContextProperties> & {};

export const [ButtonProvider, useButtonContext] = createContext<ButtonContextConfig>("ButtonContext");
