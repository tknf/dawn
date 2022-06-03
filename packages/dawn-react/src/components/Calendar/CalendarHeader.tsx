import * as React from "react";
import localeData from "dayjs/plugin/localeData";
import dayjs from "dayjs";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, resolveClassname } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";

type CalendarHeaderDayElement = React.ElementRef<typeof Extend.th>;
export type CalendarHeaderDayProps = ComponentPropsWithoutRef<typeof Extend.th> & {
  day: string;
};

export const CalendarHeaderDay = React.forwardRef<CalendarHeaderDayElement, CalendarHeaderDayProps>(
  ({ day, className, ...props }, ref) => {
    return (
      <Extend.th
        {...props}
        className={classNames(resolveClassname(styles.HeaderDay), className)}
        abbr={day}
        ref={ref}
      />
    );
  }
);

type CalendarHeaderElement = React.ElementRef<typeof Extend.thead>;
export type CalendarHeaderProps = Omit<ComponentPropsWithoutRef<typeof Extend.thead>, "children"> & {
  format?: string;
  children?: (props: { day: string }) => React.ReactNode;
};

export const CalendarHeader = React.forwardRef<CalendarHeaderElement, CalendarHeaderProps>(
  ({ className, format = "ddd", children, ...props }, ref) => {
    const { calendarID, currentDay, firstDayOfWeek } = useCalendarContext("CalendarMonthHeader");

    const getFirstDayOfWeek = React.useCallback(() => {
      if (!firstDayOfWeek) {
        dayjs.extend(localeData);
        return dayjs.localeData().firstDayOfWeek();
      }
      return firstDayOfWeek;
    }, [firstDayOfWeek]);
    const getWeekHeaders = React.useCallback(() => {
      const firstDayOfWeek = getFirstDayOfWeek();
      const weekHeaders: string[] = [];
      for (let i = 0; i < 7; i += 1) {
        weekHeaders.push(
          currentDay
            .clone()
            .day((i + firstDayOfWeek) % 7)
            .format(format)
        );
      }
      return weekHeaders;
    }, [getFirstDayOfWeek, format, currentDay]);

    const weekHeaderMarkup = getWeekHeaders().map((day, index) => {
      const key = `${calendarID}-day-${day}[${index}]`;
      if (children) {
        return <React.Fragment key={key}>{children({ day })}</React.Fragment>;
      }
      return (
        <CalendarHeaderDay key={key} day={day}>
          {day}
        </CalendarHeaderDay>
      );
    });

    return (
      <Extend.thead {...props} className={classNames(styles.Header, className)} ref={ref}>
        <Extend.tr className={styles.HeaderWeek}>{weekHeaderMarkup}</Extend.tr>
      </Extend.thead>
    );
  }
);
