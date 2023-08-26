import { useState } from "react";
import shortid from "shortid";

const useEvents = () => {
  const [state, setState] = useState({});

  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  const getEvents = (isArray = false) => {
    if (!isArray) return state;

    return Object.values(state);
  };

  const addEvent = (event) => {
    event.id = shortid.generate();
    const { id, clockId } = event;
    setState((prev) => ({
      ...prev,
      [`${clockId}|${id}`]: event,
    }));

    return event;
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };
};
