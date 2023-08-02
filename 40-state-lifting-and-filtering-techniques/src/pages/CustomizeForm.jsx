import { useState } from "react";
import Button from "../components/UI/buttons/Button";
import InputGroup from "../components/shared/forms/InputGroup";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const CustomizeForm = () => {
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const oldState = JSON.parse(JSON.stringify(state));
    oldState[name].value = value;
    setState(oldState);

    // const { errors } = checkValidity(values);
    // if (!errors[key]) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     [key]: "",
    //   }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { isValid, errors } = checkValidity(values);
    // if (isValid) {
    //   console.log(values);
    //   setErrors({ ...errors });
    // } else {
    //   setErrors({ ...errors });
    // }
  };

  const handleFocus = (e) => {
    // setFocuses((prev) => ({
    //   ...prev,
    //   [e.target.name]: true,
    // }));
  };

  const handleBlur = (e) => {
    // const key = e.target.name;
    // const { errors } = checkValidity(values);
    // if (errors[key] && focuses[key]) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     [key]: errors[key],
    //   }));
    // } else {
    //   setErrors((prev) => ({
    //     ...prev,
    //     [key]: "",
    //   }));
    // }
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
          value={state.title.value}
          label={"Title"}
          name={"title"}
          placeholder={"Software Engineer"}
          onChange={handleChange}
          error={state.title.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={state.bio.value}
          label={"Bio"}
          name={"bio"}
          placeholder={"I'm a software engineer..."}
          onChange={handleChange}
          error={state.bio.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          value={state.skills.value}
          label={"Skills"}
          name={"skills"}
          placeholder={"JavaScript, React"}
          onChange={handleChange}
          error={state.skills.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CustomizeForm;
