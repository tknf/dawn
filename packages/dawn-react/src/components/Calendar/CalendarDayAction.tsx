import dayjs from "dayjs";
import * as React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames, useDataAttributes } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";
import { CalendarChildrenProps } from "./types";

type CalendarDayActionElement = React.ElementRef<typeof Extend.span>;
export type CalendarDayActionProps = Omit<ComponentPropsWithoutRef<typeof Extend.span>, "children"> & {
  disabled?: boolean;
  day: dayjs.Dayjs;
  onDayClick?: (day: dayjs.Dayjs) => void;
  children?: (props: CalendarChildrenProps) => React.ReactNode;
};

export const CalendarDayAction = React.forwardRef<CalendarDayActionElement, CalendarDayActionProps>(
  (
    {
      "aria-label": ariaLabel,
      disabled: disabledProp,
      day,
      onDayClick,
      onClick,
      onKeyDown,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { onDayChange, currentDay } = useCalendarContext("CalendarDayAction");

    const disabled = React.useMemo(() => {
      return disabledProp || day.get("month") !== currentDay.get("month");
    }, [disabledProp, currentDay, day]);

    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLSpanElement>) => {
        if (disabled) {
          return;
        }
        onDayChange?.(day);
        onDayClick?.(day);
        onClick?.(event);
      },
      [disabled, day, onDayChange, onDayClick, onClick]
    );

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (disabled) {
          return;
        }
        if (event.key === "Enter") {
          onDayChange?.(day);
          onDayClick?.(day);
          onKeyDown?.(event);
        }
      },
      [disabled, day, onDayChange, onDayClick, onKeyDown]
    );

    const attrs = useDataAttributes({
      state: disabled && "disabled"
    });

    const childrenMarkup = day && children ? children({ day }) : null;

    return (
      <Extend.span
        {...props}
        className={classNames(styles.DayAction, className)}
        {...attrs}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={ariaLabel || day.format("YYYY/MM/DD")}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={ref}
      >
        {childrenMarkup}
      </Extend.span>
    );
  }
);
