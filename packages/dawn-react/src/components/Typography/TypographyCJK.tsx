import * as React from "react";
import { loadDefaultJapaneseParser, loadDefaultSimplifiedChineseParser } from "budoux";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname } from "../../utils";

type TypographyCJKElement = React.ElementRef<typeof Extend.p>;
export type TypographyCJKProps = Omit<ComponentPropsWithoutRef<typeof Extend.p>, "children"> & {
  lang?: "japanese" | "chinese";
  threshold?: number;
  htmlString?: string;
  children?: React.ReactNode;
};

const ROOT = "CJK";
const styles = {
  Root: resolveClassname(ROOT)
};

export const TypographyCJK = React.forwardRef<TypographyCJKElement, TypographyCJKProps>(
  ({ lang = "japanese", threshold, children, htmlString, className, ...props }, ref) => {
    const parser = React.useMemo(() => {
      if (lang === "japanese") {
        return loadDefaultJapaneseParser();
      } else if (lang === "chinese") {
        return loadDefaultSimplifiedChineseParser();
      }
      throw new Error("`Typography.CJK` requires `lang` props of either `japanese` or `chinese`");
    }, [lang]);

    const childrenMarkup = React.useMemo(() => {
      if (htmlString) {
        return parser.translateHTMLString(htmlString);
      } else if (children) {
        const childrenCopy = React.Children.toArray(children);
        return childrenCopy.map((child) => {
          if (typeof child === "string") {
            const text = parser.parse(child, threshold);
            return text.map((str, index) => {
              const isLast = text.length === index + 1;
              return (
                <React.Fragment key={index}>
                  {str}
                  {!isLast && <wbr />}
                </React.Fragment>
              );
            });
          }
          return child;
        });
      }
      return "";
    }, [children, htmlString, threshold, parser]);

    return (
      <Extend.p {...props} className={classNames(styles.Root, className)} ref={ref}>
        {childrenMarkup}
      </Extend.p>
    );
  }
);
