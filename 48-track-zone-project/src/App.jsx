import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

const App = () => {
  useClock(new Date());
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
};

export default App;
