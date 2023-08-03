import useForm from "../../hooks/useForm";

const init = {
  text: "",
  checked: false,
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Task;
