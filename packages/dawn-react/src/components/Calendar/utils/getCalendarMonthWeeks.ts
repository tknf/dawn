import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import { DayOfWeek } from "../types";

export function getCalendarMonthWeeks(
  month: dayjs.Dayjs,
  enableOutsideDays: boolean,
  firstDayOfWeek: DayOfWeek = dayjs.extend(localeData).localeData().firstDayOfWeek() as DayOfWeek
) {
  const firstOfMonth = month.clone().startOf("month").hour(12);
  const lastOfMonth = month.clone().endOf("month").hour(12);

  const prevDays = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  const nextDays = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  const firstDay = firstOfMonth.clone().subtract(prevDays, "day");
  const lastDay = lastOfMonth.clone().add(nextDays, "day");

  const totalDays = lastDay.diff(firstDay, "days") + 1;

  const currentDay = firstDay.clone();
  const weeksInMonth: (dayjs.Dayjs | null)[][] = [];
  let dayIndex = 0;

  for (let i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    let day: dayjs.Dayjs | null = null;
    if ((i >= prevDays && i < totalDays - nextDays) || enableOutsideDays) {
      day = currentDay.clone().add(dayIndex, "day");
    }
    weeksInMonth[weeksInMonth.length - 1].push(day);
    dayIndex += 1;
  }

  return weeksInMonth;
}
