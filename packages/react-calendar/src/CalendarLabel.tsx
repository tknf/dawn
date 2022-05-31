import { ForwardRefComponent } from "@tknf/react-utils";
import { forwardRef } from "react";
import { useCalendarContext } from "./CalendarContext";

export interface CalendarLabelProps {
  monthFormat?: string;
}

type CalendarLabelComp = ForwardRefComponent<"label", CalendarLabelProps>;

export const CalendarLabel = forwardRef(function CalendarLabel({ monthFormat = "YYYY/MM", ...props }, ref) {
  const { labelID, currentDay } = useCalendarContext("CalendarLabel");
  return (
    <label id={labelID} {...props} ref={ref}>
      {currentDay.format(monthFormat)}
    </label>
  );
}) as CalendarLabelComp;
