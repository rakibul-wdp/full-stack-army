import useForm from "../hooks/useForm";

const FormLibrary = () => {
  useForm({
    init: {
      name: "",
      email: "",
      password: "",
    },
  });

  return <div>FormLibrary</div>;
};

export default FormLibrary;
