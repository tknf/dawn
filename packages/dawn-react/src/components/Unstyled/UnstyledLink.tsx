import * as React from "react";
import { Extend } from "../Extend";
import { LinkLikeComponentProps, useDataAttributes, useLink } from "../../utils";

type UnstyledLinkElement = React.ElementRef<typeof Extend.a>;
export type UnstyledLinkProps = LinkLikeComponentProps & {};

export const UnstyledLink = React.memo(
  React.forwardRef<UnstyledLinkElement, UnstyledLinkProps>(({ ...props }, ref) => {
    const LinkComponent = useLink();
    const attrs = useDataAttributes({ unstyled: true });

    if (LinkComponent) {
      return <LinkComponent {...props} {...attrs} />;
    }

    const { external, url, ...rest } = props;
    const target = external ? "_blank" : undefined;
    const rel = external ? "noopener noreferrer" : undefined;
    return <Extend.a target={target} {...rest} href={url} rel={rel} {...attrs} ref={ref} />;
  })
);
