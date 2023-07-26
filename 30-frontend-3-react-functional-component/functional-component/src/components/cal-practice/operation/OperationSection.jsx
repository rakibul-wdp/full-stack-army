import PropTypes from "prop-types";
import shortid from "shortid";
import Button from "../../cal-practice/ui/Button";

const OperationSection = ({ handleArithmeticsOps, handleClearOps }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleArithmeticsOps("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleArithmeticsOps("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleArithmeticsOps("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleArithmeticsOps("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleArithmeticsOps("%"),
    },
    {
      id: shortid.generate(),
      text: "clear",
      onClick: handleClearOps,
    },
  ];

  return (
    <div>
      <p>Operations</p>
      <div>
        {operations.map((ops) => (
          <Button text={ops.text} onClick={ops.onClick} key={ops.id} />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmeticsOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
