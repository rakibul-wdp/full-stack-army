import { useState } from "react";
import Button from "../components/UI/buttons/Button";
import InputGroup from "../components/shared/forms/InputGroup";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const Form = () => {
  const [formState, setFormState] = useState({ ...init });

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup
          value={formState.title}
          label={"Title"}
          name={"title"}
          placeholder={"Software Engineer"}
          onChange={handleChange}
        />
        <InputGroup
          value={formState.bio}
          label={"Bio"}
          name={"bio"}
          placeholder={"I'm a software engineer..."}
          onChange={handleChange}
        />
        <InputGroup
          value={formState.skills}
          label={"Skills"}
          name={"skills"}
          placeholder={"JavaScript, React"}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
