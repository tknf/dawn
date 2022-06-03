import React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";
import { CalendarChildrenProps } from "./types";

type CalendarLabelElement = React.ElementRef<typeof Extend.label>;
export interface CalendarLabelProps extends Omit<ComponentPropsWithoutRef<typeof Extend.label>, "children"> {
  format?: string;
  children?: (props: CalendarChildrenProps) => React.ReactNode;
}

export const CalendarLabel = React.forwardRef<CalendarLabelElement, CalendarLabelProps>(function CalendarLabel(
  { format = "YYYY/MM", children, className, ...props },
  ref
) {
  const { labelID, currentDay } = useCalendarContext("CalendarLabel");
  const childrenMarkup = children ? children({ day: currentDay }) : currentDay.format(format);

  return (
    <label {...props} className={classNames(styles.Label, className)} id={labelID} ref={ref}>
      {childrenMarkup}
    </label>
  );
});
