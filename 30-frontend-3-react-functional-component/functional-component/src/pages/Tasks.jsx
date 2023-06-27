import React, { useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const handleTaskAdd = (e) => {
    e.preventDefault();

    setTasks([...tasks, { task: taskValue }])
  }

  console.log(tasks);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Tasks</h1>
      <div>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <h3>All Task</h3>
          <form onSubmit={handleTaskAdd}>
            <input value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" style={{ marginRight: "10px", padding: "5px 0", fontSize: "15px" }} />
            <input type="submit" value="Add" style={{ fontSize: "16px", fontWeight: "bold" }} />
          </form>
          <h3>Completed</h3>
          <h3>Incomplete</h3>
        </nav>
        <ol>
          {
            tasks.map((task, index) => (
              <li key={index}>{task.task}</li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default Tasks;

/**
 * Create New Task
 * Display All Tasks
 * Filter Tasks By Complete Incomplete and All
 * Delete Tasks
 * Edit TAsks
 */