import React from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai"

const ShowTasks = ({ tasks, taskDelete }) => {
  return (
    <div>
      {
        tasks.length > 0 ? (
          <ol>
            {
              tasks.map((task) => (
                <div style={{ display: "flex", alignItems: "center", gap: "25px", fontSize: "18px" }}>
                  <input type="checkbox" name="status" id="status" />
                  <li key={task.id}>{task.text}</li>
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