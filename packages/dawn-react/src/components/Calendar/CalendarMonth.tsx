import * as React from "react";
import { classNames } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";

type CalendarMonthElement = React.ElementRef<typeof Extend.table>;
export type CalendarMonthProps = ComponentPropsWithoutRef<typeof Extend.table> & {};

export const CalendarMonth = React.forwardRef<CalendarMonthElement, CalendarMonthProps>(
  ({ className, ...props }, ref) => {
    const { labelID, captionID } = useCalendarContext("CalendarMonth");

    return (
      <Extend.table
        {...props}
        className={classNames(styles.Month, className)}
        role="grid"
        aria-labelledby={labelID}
        aria-describedby={captionID}
        ref={ref}
      />
    );
  }
);
