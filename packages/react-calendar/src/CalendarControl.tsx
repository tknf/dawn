import { composeEventHandlers, createContext, ForwardRefComponent } from "@tknf/react-utils";
import dayjs from "dayjs";
import { forwardRef, ReactNode, useCallback } from "react";
import { useCalendarContext } from "./CalendarContext";

interface CalendarControlContextConfig {
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onResetMonth: () => void;
}

const [CalendarControlProvider, useCalendarControlContext] =
  createContext<CalendarControlContextConfig>("CalendarControl");

export interface CalendarControlProps {
  children?: ReactNode;
  onPrevMonth?: (date: dayjs.Dayjs) => void;
  onNextMonth?: (date: dayjs.Dayjs) => void;
}

type CalendarControlButtonComp = ForwardRefComponent<"button", {}>;

export const CalendarControlPrevButton = forwardRef(function CalendarControlPrevButton(
  { "aria-label": ariaLbel, onClick, ...props },
  ref
) {
  const { onPrevMonth } = useCalendarControlContext("CalendarControlPrev");
  return (
    <button
      aria-label={ariaLbel ?? "Previous month"}
      {...props}
      onClick={composeEventHandlers(onClick, onPrevMonth)}
      ref={ref}
    />
  );
}) as CalendarControlButtonComp;

export const CalendarControlNextButton = forwardRef(({ "aria-label": ariaLabel, onClick, ...props }, ref) => {
  const { onNextMonth } = useCalendarControlContext("CalendarControlNext");
  return (
    <button
      aria-label={ariaLabel ?? "Next month"}
      {...props}
      onClick={composeEventHandlers(onClick, onNextMonth)}
      ref={ref}
    />
  );
}) as CalendarControlButtonComp;

export const CalendarControlResetButton = forwardRef(({ "aria-label": ariaLabel, onClick, ...props }, ref) => {
  const { onResetMonth } = useCalendarControlContext("CalendarControlReset");
  return (
    <button
      aria-label={ariaLabel ?? "Today"}
      {...props}
      onClick={composeEventHandlers(onClick, onResetMonth)}
      ref={ref}
    />
  );
}) as CalendarControlButtonComp;

export function CalendarControl({ children, onPrevMonth, onNextMonth }: CalendarControlProps) {
  const { currentDay, onCurrentDayChange } = useCalendarContext("CalendarControl");

  const handlePrevMonth = useCallback(() => {
    const day = currentDay.clone();
    const prev = day.subtract(1, "month");
    onCurrentDayChange(prev);
    if (onPrevMonth) {
      onPrevMonth(prev);
    }
  }, [currentDay, onCurrentDayChange, onPrevMonth]);

  const handleNextMonth = useCallback(() => {
    const day = currentDay.clone();
    const next = day.add(1, "month");
    onCurrentDayChange(next);
    if (onNextMonth) {
      onNextMonth(next);
    }
  }, [currentDay, onCurrentDayChange, onNextMonth]);

  const handleResetMonth = useCallback(() => {
    onCurrentDayChange(dayjs());
  }, [onCurrentDayChange]);

  return (
    <CalendarControlProvider
      onPrevMonth={handlePrevMonth}
      onNextMonth={handleNextMonth}
      onResetMonth={handleResetMonth}
    >
      {children}
    </CalendarControlProvider>
  );
}
