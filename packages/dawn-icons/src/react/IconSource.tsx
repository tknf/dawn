import { ComponentPropsWithoutRef, Extend } from "@tknf/dawn";
import * as React from "react";
import { IconUse } from "./IconUse";

export type IconSourceElement = React.ElementRef<typeof Extend.svg>;
export type IconSourceProps = Omit<ComponentPropsWithoutRef<typeof Extend.svg>, "children">;

type IconSourceComponentProps = IconSourceProps & {
  children?: React.ReactNode;
};

export const IconSource = React.forwardRef<IconSourceElement, IconSourceComponentProps>((props, ref) => {
  return <Extend.svg {...props} viewBox="0 0 24 24" ref={ref} />;
});

export const createIconSource = (id: string) =>
  React.forwardRef<IconSourceElement, IconSourceProps>((props, ref) => {
    return (
      <IconSource {...props} ref={ref}>
        <IconUse id={id} />
      </IconSource>
    );
  });
