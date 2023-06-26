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

const sizes = {
  small: {
    padding: "0.5rem 1rem"
  },
  medium: {
    padding: "1rem 2rem"
  },
  large: {
    padding: "1.5rem 3rem"
  }
}

const ButtonGroup = ({ text, type, variant, size }) => {
  return (
    <button
      style={{
        border: "none",
        margin: "0 0 5px 0",
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px",
        cursor: "pointer",
        borderRadius: "0.15rem",
        ...variants[variant],
        ...sizes[size]
      }}
      type={type}
    >
      {text}
    </button>
  )
}

export default ButtonGroup;