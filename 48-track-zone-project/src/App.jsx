import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

const LOCAL_CLOCK_INIT = {
  title: "",
  timezone: {
    type: "",
    offset: 0,
  },
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  return (
    <div>
      {localDate !== null && <LocalClock clock={localClock} />}
      <ClockList />
    </div>
  );
};

export default App;
