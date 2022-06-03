import dayjs from "dayjs";
import { createContext } from "../../utils";
import { CalendarData, DayOfWeek } from "./types";

export interface CalendarContextConfig {
  day: dayjs.Dayjs;
  currentDay: dayjs.Dayjs;
  firstDayOfWeek?: DayOfWeek;

  onCurrentMonthChange: (day: dayjs.Dayjs) => void;
  onCurrentDayChange: (day: dayjs.Dayjs) => void;
  onDayChange?: (day: dayjs.Dayjs) => void;

  titleID: string;
  labelID: string;
  calendarID: string;
  controlID: string;
  captionID: string;

  data: CalendarData[];
}

export const [CalendarProvider, useCalendarContext] = createContext<CalendarContextConfig>("Calendar");
