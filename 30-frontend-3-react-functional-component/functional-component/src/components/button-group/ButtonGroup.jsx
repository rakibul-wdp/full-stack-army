import React from 'react';

const variants = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff"
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000"
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff"
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#000"
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000"
  }
}

const ButtonGroup = ({ text, type, variant }) => {
  const result = variants["primary"];
  console.log(variants);

  return (
    <button style={{ width: "65%", border: "none", padding: "5px 0px", margin: "0 0 5px 0", fontSize: "0.9rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", borderRadius: "0.15rem", ...variants[variant] }} type={type}>{text}</button>
  )
}

export default ButtonGroup;