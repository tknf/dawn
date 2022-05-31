import dayjs from "dayjs";
import { ForwardRefComponent } from "@tknf/react-utils";
import { forwardRef, Fragment, KeyboardEvent, MouseEvent, useCallback, useMemo } from "react";
import { useCalendarContext } from "./CalendarContext";

export interface CalendarDayProps {
  day: dayjs.Dayjs;
  dayFormat?: string;
  titleDayFormat?: string;
  disabled?: boolean;
  selected?: boolean;
  onDayClick?: (day: dayjs.Dayjs) => void;
}

type CalendarDayComp = ForwardRefComponent<"td", CalendarDayProps>;

export const CalendarDay = forwardRef(function CalendarDay(
  {
    day,
    onClick,
    onKeyDown,
    dayFormat = "D",
    titleDayFormat = "YYYY/MM/DD",
    disabled = false,
    selected = false,
    onDayClick,
    ...props
  },
  ref
) {
  const { onDayChange, data, renderData } = useCalendarContext("CalendarDay");

  const dayData = useMemo(() => {
    return data.filter((o) => {
      const dataDay = dayjs(o.day).format("YYYYMMDD");
      const currentDay = day.clone().format("YYYYMMDD");
      return dataDay === currentDay;
    });
  }, [data, day]);

  return (
    <td role="gridcell" tabIndex={disabled ? -1 : 0} {...props} ref={ref} title={day.format(titleDayFormat)}>
      {onDayClick ? (
        <Fragment>
          <span
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            aria-label={day.format(titleDayFormat)}
            aria-selected={selected}
            onClick={useCallback(
              (event: MouseEvent<HTMLElement>) => {
                if (disabled) return;
                onDayChange?.(day);
                if (onDayClick) {
                  onDayClick(day);
                }
                if (onClick) {
                  onClick(event as any);
                }
              },
              [onDayChange, onDayClick, day, onClick, disabled]
            )}
            onKeyDown={useCallback(
              (event: KeyboardEvent<HTMLElement>) => {
                if (disabled) return;
                if (event.key == "Enter") {
                  onDayChange?.(day);
                  if (onDayClick) {
                    onDayClick(day);
                  }
                  if (onKeyDown) {
                    onKeyDown(event as any);
                  }
                }
              },
              [onDayChange, onDayClick, day, onKeyDown, disabled]
            )}
          >
            {day.format(dayFormat)}
          </span>

          {renderData && dayData.length > 0 ? renderData(dayData) : null}
        </Fragment>
      ) : (
        <Fragment>
          <span aria-label={day.format(titleDayFormat)}>{day.format(dayFormat)}</span>
          {renderData && dayData.length > 0 ? renderData(dayData) : null}
        </Fragment>
      )}
    </td>
  );
}) as CalendarDayComp;
