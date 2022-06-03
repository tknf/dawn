import { TypographyCJK, TypographyCJKProps } from "./TypographyCJK";
import { TypographyClamp, TypographyClampProps } from "./TypographyClamp";
import { TypographyContainer, TypographyContainerProps } from "./TypographyContainer";
import { TypographyDisplayText, TypographyDisplayTextProps } from "./TypographyDisaplyText";
import { TypographyHeading, TypographyHeadingProps } from "./TypographyHeading";
import { TypographyInline, TypographyInlineProps } from "./TypographyInline";
import { TypographyStyle, TypographyStyleProps } from "./TypographyStyle";
import { TypographySubheading, TypographySubheadingProps } from "./TypographySubheading";
import { TypographyVisuallyHidden, TypographyVisuallyHiddenProps } from "./TypographyVisuallyHidden";

export const Typography = {
  CJK: TypographyCJK,
  Clamp: TypographyClamp,
  Container: TypographyContainer,
  DisplayText: TypographyDisplayText,
  Heading: TypographyHeading,
  Inline: TypographyInline,
  Style: TypographyStyle,
  Subheading: TypographySubheading,
  VisuallyHidden: TypographyVisuallyHidden
};

export type {
  TypographyCJKProps,
  TypographyClampProps,
  TypographyContainerProps,
  TypographyDisplayTextProps,
  TypographyHeadingProps,
  TypographyInlineProps,
  TypographyStyleProps,
  TypographySubheadingProps,
  TypographyVisuallyHiddenProps
};
