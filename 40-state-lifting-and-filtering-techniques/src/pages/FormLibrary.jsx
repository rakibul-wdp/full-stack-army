import useForm from "../hooks/useForm";

const FormLibrary = () => {
  const { formState } = useForm({});

  console.log(formState);

  return <div>FormLibrary</div>;
};

export default FormLibrary;
