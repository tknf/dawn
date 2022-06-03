import dayjs from "dayjs";
import { WEEKDAYS } from "./constants";

export type DayOfWeek = typeof WEEKDAYS[number];

export interface CalendarData {
  day: string;
  [key: string]: any;
}

export type CalendarChildrenProps = {
  day: dayjs.Dayjs;
};
