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

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const Card = () => {
  return (
    <div>Card</div>
  )
}

export default Card;