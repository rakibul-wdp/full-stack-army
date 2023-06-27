import React from 'react'

const ShowTasks = ({ tasks }) => {
  return (
    <div>
      {
        tasks.length > 0 ? (
          <ol>
            {
              tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
              ))
            }
          </ol>
        ) : (
          <p>No Task Found</p>
        )
      }
    </div>
  )
}

export default ShowTasks;