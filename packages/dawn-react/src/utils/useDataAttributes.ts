import { dash } from "./dash";

type DataAttributes = {
  [key: string]: string | null | undefined | boolean | 0;
};

export function useDataAttributes(attrs: DataAttributes) {
  const newAttrs: Record<string, string> = {};
  Object.keys(attrs).forEach((key) => {
    const value = attrs[key];
    if (value) {
      newAttrs[`data-${dash(key)}`] = dash(String(value));
    }
  });
  return newAttrs;
}
