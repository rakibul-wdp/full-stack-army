import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ date, timezone, offset }) => {
  const { date: localDate, localOffset, localTimezone } = useClock();

  return (
    <div>
      <ClockDisplay
        date={date}
        title={"My Clock"}
        timezone={timezone}
        offset={offset}
      />
      <ClockActions />
    </div>
  );
};

export default LocalClock;
