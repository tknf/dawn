import dayjs from "dayjs";
import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { I18nProvider, classNames, useControllableState, useID } from "../../utils";
import { CalendarProvider } from "./CalendarContext";
import { CalendarCaption } from "./CalendarCaption";
import {
  CalendarControl,
  CalendarControlNextButton,
  CalendarControlPrevButton,
  CalendarControlResetButton
} from "./CalendarControl";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarLabel } from "./CalendarLabel";
import { CalendarData, DayOfWeek } from "./types";
import { CalendarWeek } from "./CalendarWeek";
import { CalendarDay } from "./CalendarDay";
import { CalendarDayText } from "./CalendarDayText";
import { CalendarDayAction } from "./CalendarDayAction";
import { styles } from "./utils/styles";
import { CalendarHeader, CalendarHeaderDay } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";

type CalendarElement = React.ElementRef<typeof Extend.div>;
export type CalendarProps = ComponentPropsWithoutRef<typeof Extend.div> & {
  day?: dayjs.Dayjs;
  defaultDay?: dayjs.Dayjs;
  onDayChange?: (day: dayjs.Dayjs) => void;
  onCurrentDayChange?: (day: dayjs.Dayjs) => void;
  onCurrentMonthChange?: (day: dayjs.Dayjs) => void;
  firstDayOfWeek?: DayOfWeek;
  data?: CalendarData[];
};

type CalendarComponent = React.ForwardRefExoticComponent<CalendarProps> & {
  Caption: typeof CalendarCaption;
  Label: typeof CalendarLabel;
  Control: typeof CalendarControl;
  Prev: typeof CalendarControlPrevButton;
  Next: typeof CalendarControlNextButton;
  Reset: typeof CalendarControlResetButton;
  Month: typeof CalendarMonth;
  Header: typeof CalendarHeader;
  HeaderDay: typeof CalendarHeaderDay;
  Grid: typeof CalendarGrid;
  Week: typeof CalendarWeek;
  Day: typeof CalendarDay;
  DayText: typeof CalendarDayText;
  DayAction: typeof CalendarDayAction;
  Title: typeof CalendarTitle;
};

export const Calendar = React.forwardRef<CalendarElement, CalendarProps>(
  (
    {
      children,
      day: dayProp,
      defaultDay,
      onDayChange,
      onCurrentDayChange,
      onCurrentMonthChange,
      firstDayOfWeek,
      data = [],
      className,
      ...props
    },
    ref
  ) => {
    const [day = dayProp || dayjs(), setDay] = useControllableState({
      prop: dayProp,
      defaultProp: defaultDay,
      onChange: onDayChange
    });

    const [currentDay, setCurrentDay] = React.useState<dayjs.Dayjs>(dayProp || dayjs());
    const handleCurrentDayChange = (day: dayjs.Dayjs) => setCurrentDay(day);
    const handleCurrentMonthChange = (day: dayjs.Dayjs) => onCurrentMonthChange?.(day);

    React.useEffect(() => {
      if (onCurrentDayChange) {
        onCurrentDayChange(currentDay);
      }
    }, [currentDay, onCurrentDayChange]);

    return (
      <I18nProvider>
        <CalendarProvider
          titleID={useID()}
          labelID={useID()}
          calendarID={useID()}
          controlID={useID()}
          captionID={useID()}
          currentDay={currentDay}
          day={day}
          onDayChange={setDay}
          onCurrentDayChange={handleCurrentDayChange}
          onCurrentMonthChange={handleCurrentMonthChange}
          data={data}
          firstDayOfWeek={firstDayOfWeek}
        >
          <Extend.div {...props} className={classNames(styles.Root, className)} ref={ref}>
            {children}
          </Extend.div>
        </CalendarProvider>
      </I18nProvider>
    );
  }
) as CalendarComponent;

Calendar.Caption = CalendarCaption;
Calendar.Label = CalendarLabel;
Calendar.Control = CalendarControl;
Calendar.Prev = CalendarControlPrevButton;
Calendar.Next = CalendarControlNextButton;
Calendar.Reset = CalendarControlResetButton;
Calendar.Month = CalendarMonth;
Calendar.Header = CalendarHeader;
Calendar.HeaderDay = CalendarHeaderDay;
Calendar.Grid = CalendarGrid;
Calendar.Week = CalendarWeek;
Calendar.Day = CalendarDay;
Calendar.DayText = CalendarDayText;
Calendar.DayAction = CalendarDayAction;
Calendar.Title = CalendarTitle;
