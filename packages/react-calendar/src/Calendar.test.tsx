import { axe } from "jest-axe";
import { render, RenderResult } from "@testing-library/react";
import { Calendar, CalendarProps } from "./Calendar";
import { CalendarData } from "./types";

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

function CalendarTest(props: CalendarProps) {
  return (
    <Calendar
      {...props}
      data={data}
      renderData={(data) => (
        <div>
          {data.map((day, index) => (
            <div key={index}>{day.day}</div>
          ))}
        </div>
      )}
    >
      <Calendar.Label />
      <Calendar.Control>
        <Calendar.Prev />
        <Calendar.Reset />
        <Calendar.Next />
      </Calendar.Control>
      <Calendar.Month>
        <Calendar.Caption />
      </Calendar.Month>
    </Calendar>
  );
}

describe("Test", () => {
  let handleValueChange: jest.Mock;
  let rendered: RenderResult;

  beforeEach(() => {
    handleValueChange = jest.fn();
    rendered = render(<CalendarTest onDayChange={handleValueChange} />);
  });

  it("Default render", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});
