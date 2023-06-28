import React, { useState } from 'react'
import CreateTasks from '../components/tasks/CreateTasks';
import shortid from 'shortid';
import ShowTasks from '../components/tasks/ShowTasks';

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

  const taskDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <CreateTasks addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} taskDelete={taskDelete} />
    </div>
  )
}

export default MainTasks;

/**
 * Create New Task
 * Display All Tasks
 * Filter Tasks By Complete Incomplete and All
 * Delete Tasks
 * Edit TAsks
 */