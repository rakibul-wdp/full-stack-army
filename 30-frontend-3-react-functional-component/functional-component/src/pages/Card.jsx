import CommentListItem from "../components/card/CommentListItem";
import TagListItem from "../components/card/TagListItem";
import TaskListItem from "../components/card/TaskListItem";
import { task } from "../mockData/task";

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const Card = () => {
  return (
    <div>
      <h1>
        {getDay(task.createdAt)}, {formatDate(task.createdAt)}
      </h1>
      <h3>{task.subtitle}</h3>
      <ul>
        {task.tags.map((tag) => (
          <TagListItem tag={tag} key={tag.id} />
        ))}
      </ul>
      <hr />
      <p>Notes linked to people</p>
      <div>
        {task.comments.map((comment) => (
          <CommentListItem comment={comment} key={comment.id} />
        ))}
      </div>
      <ul>
        {task.tasks.map((task) => (
          <TaskListItem task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default Card;
