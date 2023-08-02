import useForm from "../hooks/useForm";

const FormLibrary = () => {
  const { formState } = useForm({
    init: {
      name: "Abul",
      email: "",
      password: "",
    },
  });

  console.log(formState);

  return <div>FormLibrary</div>;
};

export default FormLibrary;
