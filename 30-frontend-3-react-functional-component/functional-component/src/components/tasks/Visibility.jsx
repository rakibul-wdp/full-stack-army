import React from 'react'

const Visibility = () => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <button>All</button>
      <button>Completed</button>
      <button>Incomplete</button>
    </div>
  )
}

export default Visibility;