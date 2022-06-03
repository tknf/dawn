import React from "react";
import { ComponentPropsWithoutRef, Extend } from "../Extend";
import { classNames } from "../../utils";
import { useCalendarContext } from "./CalendarContext";
import { styles } from "./utils/styles";

type CalendarTitleElement = React.ElementRef<typeof Extend.div>;
interface CalendarTitleProps extends ComponentPropsWithoutRef<typeof Extend.div> {}

export const CalendarTitle = React.forwardRef<CalendarTitleElement, CalendarTitleProps>(function CalendarTitle(
  { className, ...props },
  ref
) {
  const { titleID } = useCalendarContext("CalendarTitle");
  return <Extend.div {...props} className={classNames(styles.Title, className)} id={titleID} ref={ref} />;
});
