import dayjs from "dayjs";
import { ReactNode, useEffect, useState } from "react";
import { useControllableState, useID } from "@tknf/react-utils";
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
import { CalendarData } from "./types";

export interface CalendarProps {
  children?: ReactNode;
  day?: dayjs.Dayjs;
  defaultDay?: dayjs.Dayjs;
  onDayChange?: (day: dayjs.Dayjs) => void;
  onCurrentDayChange?: (day: dayjs.Dayjs) => void;
  data?: CalendarData[];
  renderData?: (data: CalendarData[]) => ReactNode;
}

export function Calendar({
  children,
  day: dayProp,
  defaultDay,
  onDayChange,
  onCurrentDayChange,
  renderData,
  data = []
}: CalendarProps) {
  const [day = dayProp || dayjs(), setDay] = useControllableState({
    prop: dayProp,
    defaultProp: defaultDay,
    onChange: onDayChange
  });

  const [currentDay, setCurrentDay] = useState<dayjs.Dayjs>(dayProp || dayjs());
  const handleCurrentDayChange = (day: dayjs.Dayjs) => setCurrentDay(day);

  useEffect(() => {
    if (onCurrentDayChange) {
      onCurrentDayChange(currentDay);
    }
  }, [currentDay, onCurrentDayChange]);

  return (
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
      data={data}
      renderData={renderData}
    >
      {children}
    </CalendarProvider>
  );
}

Calendar.Caption = CalendarCaption;
Calendar.Label = CalendarLabel;
Calendar.Control = CalendarControl;
Calendar.Prev = CalendarControlPrevButton;
Calendar.Next = CalendarControlNextButton;
Calendar.Reset = CalendarControlResetButton;
Calendar.Month = CalendarMonth;
Calendar.Title = CalendarTitle;
