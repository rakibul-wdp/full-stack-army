import useForm from "../../hooks/useForm";

const init = {
  text: "",
  checked: false,
  group: "home",
};

const Task = () => {
  const { formState, handleChange, handleSubmit } = useForm({
    init,
    validate: true,
  });

  const submitCB = ({ values }) => {
    alert(JSON.stringify(values));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submitCB)}>
        <input
          type="checkbox"
          name="checked"
          checked={formState.checked.value}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          value={formState.text.value}
          onChange={handleChange}
        />
        <select
          name="group"
          value={formState.group.value}
          onChange={handleChange}
        >
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Task;
