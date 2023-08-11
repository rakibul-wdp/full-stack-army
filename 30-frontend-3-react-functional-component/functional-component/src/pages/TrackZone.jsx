import { useState } from "react";
import LocalClock from "../components/track-zone/LocalClock";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const TrackZone = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock = (date) => {
    setLocalClock({
      ...localClock,
      ...date,
    });
  };

  return (
    <div>
      <LocalClock clock={localClock} updateClock={updateLocalClock} />
    </div>
  );
};

export default TrackZone;
