import React, { useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Tasks</h1>
      <div>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <h3>All Task</h3>
          <input type="text" name="task" id="task" />
          <h3>Add</h3>
          <h3>Completed</h3>
          <h3>Incomplete</h3>
        </nav>
        <ol>
          {
            tasks.map((task) => (
              <li key={task.id}>{task}</li>
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