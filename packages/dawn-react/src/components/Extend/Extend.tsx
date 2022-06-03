import * as React from "react";
import * as ReactDOM from "react-dom";
import { Slot } from "../Slot";

const EXTEND_NODES = [
  // layout
  "div",
  // actions
  "a",
  "button",
  // typography
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  // list
  "ul",
  "ol",
  "li",
  "nav",
  // Fields
  "form",
  "fieldset",
  "label",
  "input",
  "textarea",
  // Table
  "table",
  "thead",
  "tbody",
  "tr",
  "td",
  "th",
  // Object
  "img",
  "figure",
  "caption",
  "svg"
] as const;

type PropsWithoutRef<P> = P extends any ? ("ref" extends keyof P ? Pick<P, Exclude<keyof P, "ref">> : P) : P;
export type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<React.ComponentProps<T>>;

type Extends = {
  [E in typeof EXTEND_NODES[number]]: ExtendForwardRefComponent<E>;
};
export type ExtendPropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & {
  extend?: boolean;
};

type ExtendForwardRefComponent<E extends React.ElementType> = React.ForwardRefExoticComponent<ExtendPropsWithRef<E>>;

export const Extend = EXTEND_NODES.reduce((ex, node) => {
  const Node = React.forwardRef((props: ExtendPropsWithRef<typeof node>, forwardedRef: any) => {
    const { extend, ...extendProps } = props;
    const Component: any = extend ? Slot : node;

    React.useEffect(() => {
      (window as any)[Symbol.for("tf")] = true;
    }, []);

    return <Component {...extendProps} ref={forwardedRef} />;
  });

  return { ...ex, [node]: Node };
}, {} as Extends);

export function dispatchDiscreteCustomEvent<E extends CustomEvent>(target: E["target"], event: E) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
