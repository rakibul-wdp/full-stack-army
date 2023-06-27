import React, { useState } from 'react'

const CreateTasks = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" name="task" id="task" placeholder='Name of your Task' value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => {
        if (text) {
          addNewTask(text);
          setText("");
        } else {
          alert("Invalid Text")
        }
      }} >Create Task</button>
    </div>
  )
}

export default CreateTasks;