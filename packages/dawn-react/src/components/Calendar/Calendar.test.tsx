import { axe } from "jest-axe";
import { render, RenderResult } from "@testing-library/react";
import { Fragment } from "react";
import { Calendar, CalendarProps } from "./Calendar";
import { CalendarData } from "./types";

const data: CalendarData[] = [
  {
    day: `2022-06-01`,
    startAt: "9:00",
    endAt: "18:00",
    title: "Live"
  },
  {
    day: `2022-06-01`,
    startAt: "8:00",
    endAt: "16:00",
    title: "Meeting"
  },
  {
    day: `2022-06-02`,
    startAt: "9:00",
    endAt: "18:00",
    title: "Live"
  }
];

function CalendarTest(props: CalendarProps) {
  return (
    <Calendar {...props} data={data}>
      <Calendar.Label />
      <Calendar.Control>
        <Calendar.Prev />
        <Calendar.Reset />
        <Calendar.Next />
      </Calendar.Control>
      <Calendar.Month>
        <Calendar.Caption />
        <Calendar.MonthHeader />
        <Calendar.MonthGrid>
          {(week) => (
            <Calendar.Week week={week}>
              {(day) => (
                <Calendar.Day day={day}>
                  {(day, data) => (
                    <Fragment>
                      <Calendar.DayText day={day} />
                      <div>
                        {data.map((day, index) => (
                          <div key={index}>{day.day}</div>
                        ))}
                      </div>
                      <Calendar.DayAction day={day} />
                    </Fragment>
                  )}
                </Calendar.Day>
              )}
            </Calendar.Week>
          )}
        </Calendar.MonthGrid>
      </Calendar.Month>
    </Calendar>
  );
}

describe("Calendar Component", () => {
  let handleValueChange: jest.Mock;
  let rendered: RenderResult;

  beforeEach(() => {
    handleValueChange = jest.fn();
    rendered = render(<CalendarTest onDayChange={handleValueChange} />);
  });

  it("Default render with aria", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});
