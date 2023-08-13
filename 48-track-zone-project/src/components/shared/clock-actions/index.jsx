import { useState } from "react";

const ClockActions = ({ local = false, clock }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEdit && (
        <div>
          <input type="text" value={clock.title} />
          <select name="timezone" value={clock.timezone}>
            <option value="GMT">GMT</option>
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="EST">EST</option>
            <option value="EDT">EDT</option>
            <option value="BST">BST</option>
            <option value="MST">MST</option>
          </select>
          {(clock.timezone === "GMT" || clock.timezone === "UTC") && (
            <input type="number" name="" value={clock.offset} />
          )}
        </div>
      )}
    </div>
  );
};

export default ClockActions;
