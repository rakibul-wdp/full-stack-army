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
  const { formState } = useForm({ init, validate });

  console.log(formState);

  return <div>FormLibrary</div>;
};

export default FormLibrary;
