import React from 'react';

const ListItem = () => {
  return (
    <li style={{ listStyleType: "none", display: "flex", gap: "10px" }}>
      <input type="checkbox" name="" id="" />
      <p>Please check it</p>
      <button>Delete</button>
    </li>
  )
}

export default ListItem;