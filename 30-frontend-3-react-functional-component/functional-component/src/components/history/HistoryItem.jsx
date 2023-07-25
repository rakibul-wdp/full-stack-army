import PropTypes from "prop-types";

const HistoryItem = ({ historyItem, disabled }) => {
  return (
    <li key={historyItem.id}>
      <p>
        Operation: {historyItem.inputs.a} {historyItem.operations}{" "}
        {historyItem.inputs.b}, Result: {historyItem.result}
      </p>
      <small>{historyItem.date.toLocaleDateString()}</small>
      <br />
      <button onClick={() => handleRestoreBtn(historyItem)} disabled={disabled}>
        Restore
      </button>
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
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
