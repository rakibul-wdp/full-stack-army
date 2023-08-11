import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "./ClockDisplay";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
    </div>
  );
};

export default LocalClock;
