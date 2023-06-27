import React, { useState } from 'react'
import CreateTasks from '../components/tasks/CreateTasks';

const MainTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    console.log("text calling from tasks main component", text);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <CreateTasks addNewTask={addNewTask} />
    </div>
  )
}

export default MainTasks;