import React, { useState } from 'react'
import CreateTasks from '../components/tasks/CreateTasks';
import shortid from 'shortid';
import ShowTasks from '../components/tasks/ShowTasks';
import Visibility from '../components/tasks/Visibility';

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

  const taskComplete = (isCompleted, id) => {
    console.log(isCompleted, id);

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: isCompleted
        }
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const taskDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <CreateTasks addNewTask={addNewTask} />
        <Visibility />
      </div>
      <ShowTasks tasks={tasks} taskDelete={taskDelete} taskComplete={taskComplete} />
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