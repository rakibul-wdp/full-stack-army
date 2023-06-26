import React from 'react'

const ButtonGroup = ({ label, type }) => {
  return (
    <button style={{ width: "65%", background: "tomato", border: "none", padding: "5px 0px", color: "white" }} type={type}>{label}</button>
  )
}

export default ButtonGroup;