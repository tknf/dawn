import { dash } from "./dash";

type Falsy = boolean | undefined | null | 0;

export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(" ");
}

export function variationName(name: string, value: string) {
  return `${name}-${dash(value.charAt(0).toLowerCase())}${value.slice(1)}`;
}

export function resolveClassname(
  base: string,
  { element, modifier, prefix: prefixProp = "di" }: { element?: string; modifier?: string; prefix?: string } = {}
) {
  const prefix = `${prefixProp}-`;
  let classname = base.startsWith(prefix) ? base : `${prefix}${base}`;
  if (element) {
    classname = `${classname}__${element}`;
  }
  if (modifier) {
    classname = `${classname}--${dash(modifier)}`;
  }
  return classname;
}
