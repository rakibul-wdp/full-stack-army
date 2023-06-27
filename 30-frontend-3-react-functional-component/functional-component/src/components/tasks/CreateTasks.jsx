import React, { useState } from 'react'

const CreateTasks = ({ addNewTask }) => {
  const [text, setText] = useState("sample task updated");

  return (
    <div>
      <input type="text" name="task" id="task" value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => { addNewTask(text) }}>Create Task</button>
    </div>
  )
}

export default CreateTasks;