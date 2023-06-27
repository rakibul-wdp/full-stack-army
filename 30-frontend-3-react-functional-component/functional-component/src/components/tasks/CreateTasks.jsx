import React, { useState } from 'react'

const CreateTasks = ({ addNewTask }) => {
  const [text, setText] = useState("sample task updated");

  return (
    <div>
      <input type="text" name="task" id="task" value={text} onChange={(event) => setText(event.target.value)} />
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