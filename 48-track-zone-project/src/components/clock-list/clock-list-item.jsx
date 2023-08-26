import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  if (!date || !timer) return null;

  return <div></div>;
};

export default ClockListItem;
