import { ForwardRefComponent } from "@tknf/react-utils";
import { forwardRef } from "react";
import { useCalendarContext } from "./CalendarContext";

type CalendarTitleComp = ForwardRefComponent<"div", {}>;

export const CalendarTitle = forwardRef(function CalendarTitle(props, ref) {
  const { titleID } = useCalendarContext("CalendarTitle");
  return <div id={titleID} {...props} ref={ref} />;
}) as CalendarTitleComp;
