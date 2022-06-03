import { resolveClassname } from "../../../utils";

const ROOT = "Icon";
export const styles = {
  Root: resolveClassname(ROOT),
  Svg: resolveClassname(ROOT, { element: "Svg" }),
  Placeholder: resolveClassname(ROOT, { element: "Placeholder" }),
  Img: resolveClassname(ROOT, { element: "Img" })
};
