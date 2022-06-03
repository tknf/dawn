import { resolveClassname } from "../../../utils";

const ROOT = "Button";
export const styles = {
  Root: resolveClassname(ROOT),
  Primary: resolveClassname(ROOT, { modifier: "primary" }),
  Plain: resolveClassname(ROOT, { modifier: "plain" }),
  Outline: resolveClassname(ROOT, { modifier: "outline" }),

  Content: resolveClassname(ROOT, { element: "Content" }),
  Text: resolveClassname(ROOT, { element: "Text" }),
  Icon: resolveClassname(ROOT, { element: "Icon" }),
  Spinner: resolveClassname(ROOT, { element: "Spinner" }),
  Backdrop: resolveClassname(ROOT, { element: "Backdrop" })
};
