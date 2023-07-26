import PropTypes from "prop-types";
import NumberField from "../../cal-practice/ui/NumberField";

const InputSection = ({ inputs, handleInputFields }) => {
  return (
    <div>
      <p>Inputs</p>
      <NumberField value={inputs.a} onChange={handleInputFields} name="a" />
      <NumberField value={inputs.b} onChange={handleInputFields} name="b" />
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropTypes.func.isRequired,
};

export default InputSection;
