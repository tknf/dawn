import dayjs from "dayjs";
import * as React from "react";
import { classNames } from "../../utils";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { useCalendarContext } from "./CalendarContext";
import { CalendarWeek } from "./CalendarWeek";
import { getCalendarMonthWeeks } from "./utils/getCalendarMonthWeeks";
import { styles } from "./utils/styles";

type ChildrenProps = {
  week: (dayjs.Dayjs | null)[];
};

type CalendarGridElement = React.ElementRef<typeof Extend.tbody>;
export type CalendarGridProps = Omit<ComponentPropsWithoutRef<typeof Extend.tbody>, "children"> & {
  children?: (props: ChildrenProps) => React.ReactNode;
  enableOutsideDays?: boolean;
};

export const CalendarGrid = React.forwardRef<CalendarGridElement, CalendarGridProps>(
  ({ children, enableOutsideDays = false, className, ...props }, ref) => {
    const { calendarID, firstDayOfWeek, currentDay } = useCalendarContext("CalendarGrid");

    const weeks = React.useMemo(() => {
      return getCalendarMonthWeeks(currentDay, enableOutsideDays, firstDayOfWeek);
    }, [currentDay, enableOutsideDays, firstDayOfWeek]);

    const key = (index: number) => `${calendarID}-week-${index}`;

    const childrenMarkup = children
      ? weeks.map((week, index) => <React.Fragment key={key(index)}>{children({ week })}</React.Fragment>)
      : weeks.map((week, index) => <CalendarWeek key={key(index)} week={week} />);

    return (
      <Extend.tbody {...props} className={classNames(styles.Grid, className)} ref={ref}>
        {childrenMarkup}
      </Extend.tbody>
    );
  }
);
