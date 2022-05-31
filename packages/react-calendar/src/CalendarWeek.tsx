import { ForwardRefComponent } from "@tknf/react-utils";
import dayjs from "dayjs";
import { forwardRef } from "react";
import { useCalendarContext } from "./CalendarContext";
import { CalendarDay, CalendarDayProps } from "./CalendarDay";

export interface CalendarWeekProps extends Pick<CalendarDayProps, "onDayClick" | "dayFormat" | "titleDayFormat"> {
  titleDayFormat?: string;
  week: (dayjs.Dayjs | null)[];
}

type CalendarWeekComp = ForwardRefComponent<"tr", CalendarWeekProps>;

export const CalendarWeek = forwardRef(function CalendarWeek(
  { onDayClick, titleDayFormat, dayFormat, week, ...props },
  ref
) {
  const { currentDay, calendarID } = useCalendarContext("CalendarWeek");
  return (
    <tr {...props} ref={ref}>
      {week.map((day, dayIndex) => {
        if (!day) {
          return <td key={`${calendarID}-week[${dayIndex}]`} role="gridcell"></td>;
        }
        return (
          <CalendarDay
            day={day}
            onDayClick={onDayClick}
            titleDayFormat={titleDayFormat}
            dayFormat={dayFormat}
            disabled={day.get("month") !== currentDay.get("month")}
            key={`${calendarID}-week[${dayIndex}]`}
          />
        );
      })}
    </tr>
  );
}) as CalendarWeekComp;
