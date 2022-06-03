import dayjs from "dayjs";
import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { styles } from "./utils/styles";
import { CalendarChildrenProps } from "./types";

type CalendarDayTextElement = React.ElementRef<typeof Extend.span>;
export type CalendarDayTextProps = Omit<ComponentPropsWithoutRef<typeof Extend.span>, "children"> & {
  day: dayjs.Dayjs;
  format?: string;
  children?: (props: CalendarChildrenProps) => React.ReactNode;
};

export const CalendarDayText = React.forwardRef<CalendarDayTextElement, CalendarDayTextProps>(
  ({ day, format = "D", className, children, ...props }, ref) => {
    const childrenMarkup = children ? children({ day }) : day.clone().format(format);
    return (
      <Extend.span
        {...props}
        className={classNames(styles.DayText, className)}
        aria-label={day.clone().format("YYYY/MM/DD")}
        ref={ref}
      >
        {childrenMarkup}
      </Extend.span>
    );
  }
);
