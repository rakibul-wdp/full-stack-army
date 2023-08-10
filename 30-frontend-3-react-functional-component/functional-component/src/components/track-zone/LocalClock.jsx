import { useEffect } from "react";
import useClock from "../../hooks/useClock";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return <div>LocalClock</div>;
};

export default LocalClock;
