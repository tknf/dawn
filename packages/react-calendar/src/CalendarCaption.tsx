import { forwardRef, ReactNode } from "react";
import { ForwardRefComponent } from "@tknf/react-utils";
import { useCalendarContext } from "./CalendarContext";

export interface CalendarCaptionProps {
  children?: ReactNode;
  label?: string;
  dateFormat?: string;
}

type CalendarCaptionComp = ForwardRefComponent<"caption", CalendarCaptionProps>;

export const CalendarCaption = forwardRef(function CalendarCaption(
  { children, label = "Today", dateFormat = "YYYY/MM/DD", ...props },
  ref
) {
  const { captionID, currentDay } = useCalendarContext("CalendarCaption");
  return (
    <caption id={captionID} ref={ref} {...props}>
      {`${label}: ${currentDay.format(dateFormat)}`}
      {children}
    </caption>
  );
}) as CalendarCaptionComp;
