import React, { useState } from 'react'
import CreateTasks from '../components/tasks/CreateTasks';
import shortid from 'shortid';

const MainTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };

    setTasks([task, ...tasks]);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <CreateTasks addNewTask={addNewTask} />
      {
        tasks.map((task) => (
          <h2 key={task.id}>{task.text}</h2>
        ))
      }
    </div>
  )
}

export default MainTasks;