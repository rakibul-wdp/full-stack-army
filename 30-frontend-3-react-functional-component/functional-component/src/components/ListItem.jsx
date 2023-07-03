import React from 'react';

const ListItem = ({ title, checked }) => {
  return (
    <li style={{ listStyleType: "none", display: "flex", gap: "10px" }}>
      <input checked={checked} type="checkbox" name="" id="" />
      <p>{title}</p>
      <button>Delete</button>
    </li>
  )
}

export default ListItem;