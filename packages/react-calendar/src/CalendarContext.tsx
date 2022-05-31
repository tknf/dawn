import dayjs from "dayjs";
import { createContext } from "@tknf/react-utils";
import { ReactNode } from "react";
import { CalendarData } from "./types";

export interface CalendarContextConfig {
  day: dayjs.Dayjs;
  currentDay: dayjs.Dayjs;

  onCurrentDayChange: (day: dayjs.Dayjs) => void;
  onDayChange?: (day: dayjs.Dayjs) => void;

  titleID: string;
  labelID: string;
  calendarID: string;
  controlID: string;
  captionID: string;

  data: CalendarData[];
  renderData?: (data: CalendarData[]) => ReactNode;
}

export const [CalendarProvider, useCalendarContext] = createContext<CalendarContextConfig>("Calendar");
