import * as React from "react";
import dayjs from "dayjs";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { CalendarDay } from "./CalendarDay";
import { styles } from "./utils/styles";

type ChildrenProps = {
  day: dayjs.Dayjs | null;
};

type CalendarWeekElement = React.ElementRef<typeof Extend.tr>;
export type CalendarWeekProps = Omit<ComponentPropsWithoutRef<typeof Extend.tr>, "children"> & {
  week: (dayjs.Dayjs | null)[];
  children?: (props: ChildrenProps) => React.ReactNode;
};

export const CalendarWeek = React.forwardRef<CalendarWeekElement, CalendarWeekProps>(
  ({ week, className, children, ...props }, ref) => {
    const { calendarID } = useCalendarContext("CalendarWeek");
    const key = (index: number) => `${calendarID}-day[${index}]`;
    const childrenMarkup = children
      ? week.map((day, index) => (
          <React.Fragment key={key(index)}>
            {children({
              day
            })}
          </React.Fragment>
        ))
      : week.map((day, index) => <CalendarDay key={key(index)} day={day} />);

    return (
      <Extend.tr {...props} className={classNames(styles.Week, className)} ref={ref}>
        {childrenMarkup}
      </Extend.tr>
    );
  }
);
