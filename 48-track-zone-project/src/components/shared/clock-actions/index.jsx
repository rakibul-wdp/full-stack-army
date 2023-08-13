import { useState } from "react";

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEdit && (
        <div>
          <input type="text" name="title" value={clock.title} />
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
            <select name="offset" value={clock.offset}>
              {defaultOffsets.map((offset) => (
                <option key={offset} value={offset}>
                  {offset}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default ClockActions;
