import { useState } from "react";
import Button from "../components/UI/buttons/Button";
import InputGroup from "../components/shared/forms/InputGroup";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const Form = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const key = e.target.name;
    const { errors } = checkValidity(values);

    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidity(values);
    if (isValid) {
      console.log(values);
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidity(values);

    if (errors[key] && focuses[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const checkValidity = () => {
    const errors = {};
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Invalid Title";
    }
    if (!bio) {
      errors.bio = "Invalid Bio";
    }
    if (!skills) {
      errors.skills = "Invalid Skills";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <InputGroup
          value={values.title}
          label={"Title"}
          name={"title"}
          placeholder={"Software Engineer"}
          onChange={handleChange}
          error={errors.title}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={values.bio}
          label={"Bio"}
          name={"bio"}
          placeholder={"I'm a software engineer..."}
          onChange={handleChange}
          error={errors.bio}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={values.skills}
          label={"Skills"}
          name={"skills"}
          placeholder={"JavaScript, React"}
          onChange={handleChange}
          error={errors.skills}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
