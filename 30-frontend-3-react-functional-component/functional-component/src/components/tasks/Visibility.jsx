import React from 'react'

const Visibility = ({ completed, incomplete, allTasks }) => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <button onClick={allTasks}>All</button>
      <button onClick={completed}>Completed</button>
      <button onClick={incomplete}>Incomplete</button>
    </div>
  )
}

export default Visibility;