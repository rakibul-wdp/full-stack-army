/* eslint-disable react/prop-types */

const CommentListItem = ({ comment }) => {
  return (
    <div key={comment.id}>
      <h3>{comment.user.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentListItem;
