import { WEEKDAYS } from "./constants";

export type DayOfWeek = typeof WEEKDAYS[number];

export interface CalendarData {
  day: string;
  [key: string]: any;
}
