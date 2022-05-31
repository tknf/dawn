import * as React from "react";

type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;
type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : {};
type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any> ? I : never;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, OwnProps & { as?: E }>
>;

interface ForwardRefComponent<IntrinsicElementString, OwnProps = {}>
  extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  <El = IntrinsicElementString>(
    props: El extends ""
      ? {}
      : El extends React.ComponentType<infer P>
      ? Merge<P, OwnProps>
      : El extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[El], OwnProps>
      : never
  ): React.ReactElement | null;
}

export type { ForwardRefComponent, OwnProps, IntrinsicElement, Merge };
