import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

const App = () => {
  const { date: localDate, localOffset, localTimezone } = useClock();

  return (
    <div>
      {localDate !== null && (
        <LocalClock
          date={localDate}
          timezone={localTimezone}
          offset={localOffset}
        />
      )}
      <ClockList />
    </div>
  );
};

export default App;
