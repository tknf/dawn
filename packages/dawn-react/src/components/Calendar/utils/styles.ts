import { resolveClassname } from "../../../utils";

const ROOT = "Calendar";

export const styles = {
  Root: resolveClassname(ROOT),

  ControlAction: resolveClassname(ROOT, { element: "ControlAction" }),
  Title: resolveClassname(ROOT, { element: "Title" }),
  Label: resolveClassname(ROOT, { element: "Label" }),
  Caption: resolveClassname(ROOT, { element: "Caption" }),

  Month: resolveClassname(ROOT, { element: "Month" }),
  Header: resolveClassname(ROOT, { element: "Header" }),
  HeaderWeek: resolveClassname(ROOT, { element: "HeaderWeek" }),
  HeaderDay: resolveClassname(ROOT, { element: "HeaderDay" }),
  Grid: resolveClassname(ROOT, { element: "Grid" }),

  Week: resolveClassname(ROOT, { element: "Week" }),
  Day: resolveClassname(ROOT, { element: "Day" }),
  DayAction: resolveClassname(ROOT, { element: "DayAction" }),
  DayText: resolveClassname(ROOT, { element: "DayText" })
};
