import dayjs from "dayjs";
import { Fragment, useState } from "react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "../Button";
import { C_Box, C_Header, C_Main } from "../_storybook/Components";
import { Calendar } from "./Calendar";
import { CalendarData } from "./types";

export default {
  title: "Components/Calendar"
};

export const Default = () => {
  const [day, setDay] = useState<dayjs.Dayjs>(dayjs());

  return (
    <C_Main>
      <C_Header title="Calendar/Default" description="" />
      <C_Box>
        <Calendar day={day} onDayChange={setDay} firstDayOfWeek={1}>
          <div style={{ display: "flex", alignItems: "center", padding: "2rem 0" }}>
            <Calendar.Label style={{ flexGrow: 1 }} />
            <Calendar.Control>
              <Calendar.Prev style={{ marginLeft: "auto" }} extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronLeftIcon} />
                </Button>
              </Calendar.Prev>
              <Calendar.Reset extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={CalendarIcon} />
                </Button>
              </Calendar.Reset>
              <Calendar.Next extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronRightIcon} />
                </Button>
              </Calendar.Next>
            </Calendar.Control>
          </div>

          <Calendar.Month>
            <Calendar.Caption />
            <Calendar.Header>
              {({ day }) => {
                return <Calendar.HeaderDay day={day}>{day}</Calendar.HeaderDay>;
              }}
            </Calendar.Header>
            <Calendar.Grid>
              {({ week }) => (
                <Calendar.Week week={week}>
                  {({ day }) => <Calendar.Day day={day}>{({ day }) => <Calendar.DayText day={day} />}</Calendar.Day>}
                </Calendar.Week>
              )}
            </Calendar.Grid>
          </Calendar.Month>
        </Calendar>
      </C_Box>
    </C_Main>
  );
};

export const WithDayAction = () => {
  const [day, setDay] = useState<dayjs.Dayjs>(dayjs());
  return (
    <C_Main>
      <C_Header title="Calendar/WithDayAction" description="" />

      <C_Box>
        <Calendar day={day} onDayChange={setDay} firstDayOfWeek={1}>
          <div style={{ display: "flex", alignItems: "center", padding: "2rem 0" }}>
            <Calendar.Label style={{ flexGrow: 1 }} />
            <Calendar.Control>
              <Calendar.Prev style={{ marginLeft: "auto" }} extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronLeftIcon} />
                </Button>
              </Calendar.Prev>
              <Calendar.Reset extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={CalendarIcon} />
                </Button>
              </Calendar.Reset>
              <Calendar.Next extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronRightIcon} />
                </Button>
              </Calendar.Next>
            </Calendar.Control>
          </div>

          <Calendar.Month>
            <Calendar.Caption />
            <Calendar.Header>
              {({ day }) => {
                return <Calendar.HeaderDay day={day}>{day}</Calendar.HeaderDay>;
              }}
            </Calendar.Header>
            <Calendar.Grid>
              {({ week }) => (
                <Calendar.Week week={week}>
                  {({ day }) => (
                    <Calendar.Day day={day}>
                      {({ day }) => (
                        <Fragment>
                          <Calendar.DayText day={day} />
                          <Calendar.DayAction
                            day={day}
                            onDayClick={(day) => {
                              window.alert(`Today: ${day.format("YYYY/MM/DD")}`);
                            }}
                          />
                        </Fragment>
                      )}
                    </Calendar.Day>
                  )}
                </Calendar.Week>
              )}
            </Calendar.Grid>
          </Calendar.Month>
        </Calendar>
      </C_Box>
    </C_Main>
  );
};

export const WithDayData = () => {
  const [day, setDay] = useState<dayjs.Dayjs>(dayjs());

  const data: CalendarData[] = [
    {
      day: `2022-${dayjs().format("MM")}-01`,
      startAt: "9:00",
      endAt: "18:00",
      title: "Live"
    },
    {
      day: `2022-${dayjs().format("MM")}-01`,
      startAt: "8:00",
      endAt: "16:00",
      title: "Meeting"
    },
    {
      day: `2022-${dayjs().format("MM")}-02`,
      startAt: "9:00",
      endAt: "18:00",
      title: "Live"
    }
  ];

  return (
    <C_Main>
      <C_Header title="Calendar/WithDayData" description="" />
      <C_Box>
        <Calendar day={day} onDayChange={setDay} data={data} firstDayOfWeek={1}>
          <div style={{ display: "flex", alignItems: "center", padding: "2rem 0" }}>
            <Calendar.Label style={{ flexGrow: 1 }} />
            <Calendar.Control>
              <Calendar.Prev style={{ marginLeft: "auto" }} extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronLeftIcon} />
                </Button>
              </Calendar.Prev>
              <Calendar.Reset extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={CalendarIcon} />
                </Button>
              </Calendar.Reset>
              <Calendar.Next extend>
                <Button iconOnly plain monochrome>
                  <Button.Icon source={ChevronRightIcon} />
                </Button>
              </Calendar.Next>
            </Calendar.Control>
          </div>

          <Calendar.Month>
            <Calendar.Caption />
            <Calendar.Header>
              {({ day }) => {
                return <Calendar.HeaderDay day={day}>{day}</Calendar.HeaderDay>;
              }}
            </Calendar.Header>
            <Calendar.Grid>
              {({ week }) => (
                <Calendar.Week week={week}>
                  {({ day }) => (
                    <Calendar.Day day={day}>
                      {({ day, data }) => (
                        <Fragment>
                          <Calendar.DayText day={day} />
                          <div>
                            {data.map((d, i) => (
                              <div key={i} style={{ paddingTop: "10px" }}>
                                <div>
                                  {d.startAt} ~ {d.endAt}
                                </div>
                                <div>{d.title}</div>
                              </div>
                            ))}
                          </div>
                        </Fragment>
                      )}
                    </Calendar.Day>
                  )}
                </Calendar.Week>
              )}
            </Calendar.Grid>
          </Calendar.Month>
        </Calendar>
      </C_Box>
    </C_Main>
  );
};
