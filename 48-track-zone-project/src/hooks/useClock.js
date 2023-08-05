import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const init = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: "",
  },
  date_utc0: null,
  date: null,
};

const useClock = (date, timezone, type) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let d = new Date(date);
    const offset = d.getTimezoneOffset();
    d = addMinutes(d, offset);
    console.log(d.toLocaleString());
  }, []);

  return {
    clock: state,
  };
};

export default useClock;
