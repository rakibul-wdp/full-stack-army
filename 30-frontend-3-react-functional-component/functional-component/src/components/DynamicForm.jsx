import React, { useState } from 'react';

const formFields = {
  name: {
    label: "What is Your Name?",
    type: "text",
    placeholder: "John Doe"
  },
  email: {
    type: "email",
    label: "What is Your Email?",
    placeholder: "john@example.com"
  },
  phone: {
    type: "tel",
    label: "What is Your Phone?",
    placeholder: "+8801580530145"
  },
  password: {
    type: "password",
    label: "What is Your Password?",
    placeholder: "******"
  },
  color: {
    type: "color",
    label: "What is Your Favorite Color?",
    placeholder: "red"
  },
  birthDay: {
    type: "date",
    label: "What is Your Birth Date",
    placeholder: "01-01-2023"
  },
  age: {
    type: "number",
    label: "What is Your Current Age?",
    placeholder: "20"
  }
};

// step no 1 - transform the object as our need

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: ""
    }

    return acc;
  }, {})
}

const mapObjectToArray = (obj) => {
  // const keys = Object.keys(obj);
  // const arr = keys.map((key) => {
  //   return {
  //     name: key,
  //     type: formFields[key].type,
  //     label: formFields[key].label,
  //     placeholder: formFields[key].placeholder
  //   }
  // })
  // return arr;

  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
}

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formFields));
  const formData = mapObjectToArray(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value

      return acc;
    }, {})

    console.log(values);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.value,
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        formData.map((form, index) => (
          <div key={index}>
            <label>{form.label}</label>
            <input
              type={form.type}
              name={form.name}
              id={form.name}
              placeholder={form.placeholder}
              value={form.value}
              onChange={handleChange}
            />
          </div>
        ))
      }
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default DynamicForm;