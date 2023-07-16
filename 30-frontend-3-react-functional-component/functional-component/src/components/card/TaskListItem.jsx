/* eslint-disable react/prop-types */
const TaskListItem = ({ task }) => {
  return (
    <li key={task.id}>
      <h3>{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
};

export default TaskListItem;
