import dayjs from "dayjs";
import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { CalendarDayText } from "./CalendarDayText";
import { CalendarChildrenProps, CalendarData } from "./types";
import { styles } from "./utils/styles";

type ChildrenProps = CalendarChildrenProps & {
  data: CalendarData[];
};

type CalendarDayElement = React.ElementRef<typeof Extend.td>;
export type CalendarDayProps = Omit<ComponentPropsWithoutRef<typeof Extend.td>, "children"> & {
  day: dayjs.Dayjs | null;
  format?: string;
  children?: (props: ChildrenProps) => React.ReactNode;
};

export const CalendarDay = React.forwardRef<CalendarDayElement, CalendarDayProps>(
  ({ day, format = "DD/MM/YYYY", className, children, ...props }, ref) => {
    const { data } = useCalendarContext("CalendarDay");
    const calendarData = React.useMemo(() => {
      if (!day) {
        return [];
      }
      return data.filter((d) => {
        const dataDay = dayjs(d.day).format("YYYY-MM-DD");
        const current = day.format("YYYY-MM-DD");
        return dataDay === current;
      });
    }, [data, day]);

    const childrenMarkup =
      day && children ? children({ day, data: calendarData }) : day ? <CalendarDayText day={day} /> : null;
    return (
      <Extend.td
        {...props}
        role="gridcell"
        className={classNames(styles.Day, className)}
        title={day?.format(format)}
        ref={ref}
      >
        {childrenMarkup}
      </Extend.td>
    );
  }
);
