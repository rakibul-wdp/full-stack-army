import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai"

const ShowTasks = ({ tasks, taskDelete, taskComplete }) => {
  return (
    <div>
      {
        tasks.length > 0 ? (
          <ol>
            {
              tasks.map((task) => (
                <div key={task.id} style={{ display: "flex", alignItems: "center", gap: "25px", fontSize: "18px" }}>
                  <input onChange={(e) => {
                    taskComplete(e.target.checked, task.id)
                  }} checked={task.isCompleted} type="checkbox" name="status" id="status" />
                  <li>{task.text}</li>
                  <FiEdit />
                  <AiFillDelete onClick={() => taskDelete(task.id)} style={{ cursor: "pointer" }} />
                </div>
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