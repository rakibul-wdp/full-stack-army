import PropTypes from "prop-types";

const NumberField = ({ value, onChange, name }) => {
  const style = {
    padding: "0.25rem",
    borderRadius: "0.1rem",
    border: "1px solid gray",
    background: "#fff",
    color: "#000",
    outline: "none",
  };

  return (
    <input
      style={style}
      type="number"
      name={name}
      id=""
      value={value}
      onChange={onChange}
    />
  );
};

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
