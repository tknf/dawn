import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { useI18n, classNames } from "../../utils";
import { Typography } from "../Typography";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";
import { CalendarChildrenProps } from "./types";

type CalendarCaptionElement = React.ElementRef<typeof Extend.caption>;
export type CalendarCaptionProps = Omit<ComponentPropsWithoutRef<typeof Extend.caption>, "children"> & {
  children?: (props: CalendarChildrenProps) => React.ReactNode;
  label?: string;
  format?: string;
};
export const CalendarCaption = React.forwardRef<CalendarCaptionElement, CalendarCaptionProps>(
  ({ format = "YYYY/MM/DD", label, className, children, ...props }, ref) => {
    const { captionID, currentDay } = useCalendarContext("CalendarCaption");
    const { translate } = useI18n();
    const childrenMarkup = children ? (
      children({ day: currentDay })
    ) : (
      <Typography.VisuallyHidden>
        {`${label || translate("Components.Calendar.Caption.label")}: ${currentDay.clone().format(format)}`}
      </Typography.VisuallyHidden>
    );

    return (
      <Extend.caption {...props} className={classNames(styles.Caption, className)} id={captionID} ref={ref}>
        {childrenMarkup}
      </Extend.caption>
    );
  }
);
