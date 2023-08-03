import Button from "../components/UI/buttons/Button";
import InputGroup from "../components/shared/forms/InputGroup";
import Task from "../components/task/Task";
import useForm from "../hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Email name is required";
  }

  if (!values.password) {
    errors.password = "Password name is required";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be 6 character";
  }

  return errors;
};

const FormLibrary = () => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      alert("[ERROR]" + JSON.stringify(errors));
    } else {
      alert("[SUCCESS]" + JSON.stringify(values));
    }
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <InputGroup
          value={state.firstName.value}
          label={"First Name"}
          name={"firstName"}
          placeholder={"John"}
          onChange={handleChange}
          error={state.firstName.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={state.lastName.value}
          label={"Last Name"}
          name={"lastName"}
          placeholder={"Doe"}
          onChange={handleChange}
          error={state.lastName.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={state.email.value}
          label={"Email"}
          name={"email"}
          placeholder={"test@example.com"}
          onChange={handleChange}
          error={state.email.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={state.password.value}
          label={"Password"}
          name={"password"}
          placeholder={"********"}
          onChange={handleChange}
          error={state.password.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div>
          <Button type="reset" onClick={clear}>
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <hr />
      <Task />
    </div>
  );
};

export default FormLibrary;
