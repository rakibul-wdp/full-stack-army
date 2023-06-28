import React from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai"

const ShowFilteredTasks = ({ filteredTasks, taskDelete, taskComplete }) => {
  return (
    <ol>
      {
        filteredTasks.map((task) => (
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
  )
}

export default ShowFilteredTasks;