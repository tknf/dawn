import { ForwardRefComponent } from "@tknf/react-utils";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import { forwardRef, useCallback, useMemo } from "react";
import { useCalendarContext } from "./CalendarContext";
import { CalendarWeek, CalendarWeekProps } from "./CalendarWeek";
import { DayOfWeek } from "./types";
import { getCalendarMonthWeeks } from "./utils/getCalendarMonthWeeks";

export interface CalendarMonthProps extends Pick<CalendarWeekProps, "dayFormat" | "titleDayFormat" | "onDayClick"> {
  dayOfWeekFormat?: string;
  enableOutsideDays?: boolean;
  firstDayOfWeek?: DayOfWeek;
}

type CalendarMonthComp = ForwardRefComponent<"table", CalendarMonthProps>;

export const CalendarMonth = forwardRef(function CalendarMonth(
  {
    dayFormat,
    dayOfWeekFormat,
    enableOutsideDays = false,
    firstDayOfWeek,
    titleDayFormat,
    children,
    onDayClick,
    ...props
  },
  ref
) {
  const { currentDay, labelID, captionID, calendarID } = useCalendarContext("CalendarMonth");

  const weeks = useMemo(() => {
    return getCalendarMonthWeeks(currentDay, enableOutsideDays, firstDayOfWeek);
  }, [currentDay, enableOutsideDays, firstDayOfWeek]);

  const getFirstDayOfWeek = useCallback(() => {
    if (!firstDayOfWeek) {
      dayjs.extend(localeData);
      return dayjs.localeData().firstDayOfWeek();
    }
    return firstDayOfWeek;
  }, [firstDayOfWeek]);

  const getWeekHeaders = useCallback(() => {
    const firstDayOfWeek = getFirstDayOfWeek();
    const weekHeaders: string[] = [];
    for (let i = 0; i < 7; i += 1) {
      weekHeaders.push(
        currentDay
          .clone()
          .day((i + firstDayOfWeek) % 7)
          .format(dayOfWeekFormat)
      );
    }

    return weekHeaders;
  }, [getFirstDayOfWeek, dayOfWeekFormat, currentDay]);

  return (
    <table role="grid" aria-labelledby={labelID} aria-describedby={captionID} {...props} ref={ref}>
      {children}
      <thead>
        <tr>
          {getWeekHeaders().map((day, index) => {
            return (
              <th key={`${calendarID}-day-${day}[${index}]`} abbr={day}>
                {day}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, index) => {
          return (
            <CalendarWeek
              key={`${calendarID}-week-${index}`}
              week={week}
              titleDayFormat={titleDayFormat}
              dayFormat={dayFormat}
              onDayClick={onDayClick}
            />
          );
        })}
      </tbody>
    </table>
  );
}) as CalendarMonthComp;
