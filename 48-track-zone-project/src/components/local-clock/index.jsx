import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock }) => {
  const { date, timezone, offset, localOffset, localTimezone } = useClock(
    clock.timezone,
    clock.offset
  );

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          title={"My Clock"}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions />
    </div>
  );
};

export default LocalClock;
