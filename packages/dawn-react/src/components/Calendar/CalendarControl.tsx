import dayjs from "dayjs";
import React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { useI18n, classNames, composeEventHandlers, createContext, useDataAttributes } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";

interface CalendarControlContextConfig {
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onResetMonth: () => void;
}

const [CalendarControlProvider, useCalendarControlContext] =
  createContext<CalendarControlContextConfig>("CalendarControl");

export interface CalendarControlProps {
  children?: React.ReactNode;
  onPrevMonth?: (date: dayjs.Dayjs) => void;
  onNextMonth?: (date: dayjs.Dayjs) => void;
}

type ExtendButtonProps = ComponentPropsWithoutRef<typeof Extend.button>;
type CalendarControlButtonElement = React.ElementRef<typeof Extend.button>;
export interface CalendarControlButtonProps extends ExtendButtonProps {}

export const CalendarControlPrevButton = React.forwardRef<CalendarControlButtonElement, CalendarControlButtonProps>(
  function CalendarControlPrevButton({ "aria-label": ariaLbel, onClick, className, ...props }, ref) {
    const { onPrevMonth } = useCalendarControlContext("CalendarControlPrev");
    const attrs = useDataAttributes({ action: "previous" });
    const { translate } = useI18n();

    return (
      <Extend.button
        {...props}
        className={classNames(styles.ControlAction, className)}
        {...attrs}
        aria-label={ariaLbel || translate("Components.Calendar.ControlPrev.label")}
        onClick={composeEventHandlers(onClick, onPrevMonth)}
        ref={ref}
      />
    );
  }
);

export const CalendarControlNextButton = React.forwardRef<CalendarControlButtonElement, CalendarControlButtonProps>(
  ({ "aria-label": ariaLabel, onClick, className, ...props }, ref) => {
    const { onNextMonth } = useCalendarControlContext("CalendarControlNext");
    const attrs = useDataAttributes({ action: "next" });
    const { translate } = useI18n();

    return (
      <Extend.button
        {...props}
        className={classNames(styles.ControlAction, className)}
        {...attrs}
        aria-label={ariaLabel || translate("Components.Calendar.ControlNext.label")}
        onClick={composeEventHandlers(onClick, onNextMonth)}
        ref={ref}
      />
    );
  }
);

export const CalendarControlResetButton = React.forwardRef<CalendarControlButtonElement, CalendarControlButtonProps>(
  ({ "aria-label": ariaLabel, onClick, className, ...props }, ref) => {
    const { onResetMonth } = useCalendarControlContext("CalendarControlReset");
    const attrs = useDataAttributes({ action: "reset" });
    const { translate } = useI18n();

    return (
      <Extend.button
        {...props}
        className={classNames(styles.ControlAction, className)}
        {...attrs}
        aria-label={ariaLabel || translate("Components.Calendar.ControlReset.label")}
        {...props}
        onClick={composeEventHandlers(onClick, onResetMonth)}
        ref={ref}
      />
    );
  }
);

export function CalendarControl({ children, onPrevMonth, onNextMonth }: CalendarControlProps) {
  const { currentDay, onCurrentMonthChange, onCurrentDayChange } = useCalendarContext("CalendarControl");

  const handlePrevMonth = React.useCallback(() => {
    const day = currentDay.clone();
    const prev = day.subtract(1, "month");
    onCurrentMonthChange(prev);
    onCurrentDayChange(prev);
    if (onPrevMonth) {
      onPrevMonth(prev);
    }
  }, [currentDay, onCurrentMonthChange, onCurrentDayChange, onPrevMonth]);

  const handleNextMonth = React.useCallback(() => {
    const day = currentDay.clone();
    const next = day.add(1, "month");
    onCurrentMonthChange(next);
    onCurrentDayChange(next);
    if (onNextMonth) {
      onNextMonth(next);
    }
  }, [currentDay, onCurrentMonthChange, onCurrentDayChange, onNextMonth]);

  const handleResetMonth = React.useCallback(() => {
    const day = dayjs();
    onCurrentMonthChange(day);
    onCurrentDayChange(day);
  }, [onCurrentMonthChange, onCurrentDayChange]);

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
