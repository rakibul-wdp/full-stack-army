import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../cal-practice/ui/Button";

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <li key={historyItem.id}>
      <div>
        <p>
          Operation: {historyItem.inputs.a} {historyItem.operations}{" "}
          {historyItem.inputs.b}, Result: {historyItem.result}
        </p>
        <Button text={show ? "Hide" : "Show"} onClick={handleToggle} />
      </div>
      {show && (
        <>
          <small>{historyItem.date.toLocaleDateString()}</small>
          <br />
          <Button
            text="Restore"
            onClick={() => handleRestoreBtn(historyItem)}
            disabled={disabled}
          />
        </>
      )}
    </li>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operations: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
