import useForm from "../hooks/useForm";

const init = {
  text: "",
  checked: false,
};

const Task = () => {
  const { formState, handleChange } = useForm({ init, validate: true });

  return (
    <div>
      <form>
        <input
          type="checkbox"
          name="checkbox"
          checked={formState.checkbox.value}
          value={formState.checkbox.value}
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
