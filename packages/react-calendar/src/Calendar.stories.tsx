import "dayjs/locale/ja";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";
import { useState } from "react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { css } from "../../../stitches.config";
import { Calendar } from "./Calendar";
import { CalendarData } from "./types";

const rootCalss = css({
  width: "100%",
  padding: "1rem",
  border: "1px solid $gray100",
  borderRadius: "6px"
});

const monthClass = css({
  display: "block",
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  thead: {
    display: "block",
    borderBottom: "1px solid $gray100"
  },
  tbody: {
    display: "block"
  },
  tr: {
    margin: "0.5rem 0",
    display: "flex",
    flexWrap: "wrap"
  },
  th: {
    minWidth: "1.5rem",
    flex: "1 1 0%",
    textAlign: "center",
    padding: "0",
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "$black",
    textTransform: "uppercase"
  },
  td: {
    position: "relative",
    flex: "1 1 0%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "2rem 0.25rem 0.25rem",
    width: "1.875rem",
    minHeight: "5rem"
  },
  "td > span": {
    position: "absolute",
    top: "4px",
    left: "4px",
    fontSize: "0.75rem"
  }
});

const controlCalss = css({
  position: "relative",
  display: "flex",
  minWidth: "1px",
  maxWidth: "100%",
  alignItems: "center",
  justifyContent: "space-between"
});

const controlButtonCalss = css({
  minWidth: "44px",
  minHeight: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: "0",
  boxShadow: "none",
  appearance: "none",
  cursor: "pointer",
  marginLeft: "15px"
});

const eventDataWrapperClass = css({
  width: "100%",
  fontSize: "0.8rem"
});

const captionCalss = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "1px",
  height: "1px",
  clip: "rect(1px,1px,1px,1px)",
  overflow: "hidden"
});

export default {
  title: "Components/Calendar"
};

const data: CalendarData[] = [
  {
    day: "2022-05-01",
    status: "仮予約",
    venue: "屋内",
    startAt: "9:00",
    endAt: "18:00"
  },
  {
    day: "2022-05-01",
    status: "本予約済み",
    venue: "屋外",
    startAt: "8:00",
    endAt: "16:00"
  },
  {
    day: "2022-05-02",
    status: "本予約済み",
    venue: "屋外",
    startAt: "9:00",
    endAt: "18:00"
  }
];

export const Default = () => {
  dayjs.extend(updateLocale);
  dayjs.locale("ja");
  dayjs.updateLocale("ja", {
    weekStart: 1
  });
  const [day, setDay] = useState<dayjs.Dayjs>(dayjs());

  const renderData = (data: CalendarData[]) => {
    return (
      <div className={eventDataWrapperClass()}>
        {data.map((d) => (
          <div key={d.title}>
            <div>{d.venue}</div>
            <div>
              {d.startAt} ~ {d.endAt}
              {"  "}
              {d.status}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main>
      <h1>Calendar/Default</h1>
      <div className={rootCalss()}>
        <Calendar day={day} onDayChange={setDay} data={data} renderData={renderData}>
          <div className={controlCalss()}>
            <Calendar.Label />
            <Calendar.Control>
              <Calendar.Prev className={controlButtonCalss()} style={{ marginLeft: "auto" }}>
                <ChevronLeftIcon />
              </Calendar.Prev>
              <Calendar.Reset className={controlButtonCalss()}>
                <CalendarIcon />
              </Calendar.Reset>
              <Calendar.Next className={controlButtonCalss()}>
                <ChevronRightIcon />
              </Calendar.Next>
            </Calendar.Control>
          </div>
          <Calendar.Month dayOfWeekFormat="ddd" dayFormat="D" className={monthClass()}>
            <Calendar.Caption label="本日" className={captionCalss()} />
          </Calendar.Month>
        </Calendar>
      </div>
    </main>
  );
};
