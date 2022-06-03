import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../components/Extend";

export type LinkLikeComponentProps = ComponentPropsWithoutRef<typeof Extend.a> & {
  url: string;
  external?: boolean;
  download?: string | boolean;
};

export type LinkLikeComponent = React.ComponentType<LinkLikeComponentProps>;

export const LinkContext = React.createContext<LinkLikeComponent | undefined>(undefined);

export function useLink() {
  return React.useContext(LinkContext);
}
