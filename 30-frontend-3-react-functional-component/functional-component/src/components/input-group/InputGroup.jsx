import React from 'react'

const InputGroup = ({ label, type, name, id }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input style={{ padding: "5px", outline: "none" }} type={type} name={name} id={id} />
    </div>
  )
}

export default InputGroup