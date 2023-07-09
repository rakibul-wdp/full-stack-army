import React from 'react'
import { task } from '../mockData/task';

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

  return days[date];
}

console.log(getDay(task.createdAt))

const Card = () => {
  return (
    <div>Card</div>
  )
}

export default Card;