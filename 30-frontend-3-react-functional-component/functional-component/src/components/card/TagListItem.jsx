/* eslint-disable react/prop-types */
const TagListItem = ({ tag }) => {
  return (
    <li>
      <small>{tag.icon}</small> - {tag.text}
    </li>
  );
};

export default TagListItem;
