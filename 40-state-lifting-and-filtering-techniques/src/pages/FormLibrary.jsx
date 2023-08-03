import InputGroup from "../components/shared/forms/InputGroup";
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

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default FormLibrary;
