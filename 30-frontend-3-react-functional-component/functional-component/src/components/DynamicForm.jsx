import React from 'react';

const formFields = {
  name: {
    "label": "What is Your Name?",
    "type": "text",
    "placeholder": "John Doe"
  },
  email: {
    "type": "email",
    "label": "What is Your Email?",
    "placeholder": "john@example.com"
  },
  phone: {
    "type": "tel",
    "label": "What is Your Phone?",
    "placeholder": "+8801580530145"
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
  }
};

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

  return Object.keys(obj).map((key) => ({ name: key, ...formFields[key] }));
}

const DynamicForm = () => {
  const formData = mapObjectToArray(formFields);

  return (
    <form>
      {
        formData.map((form, index) => (
          <div key={index}>
            <label>{form.label}</label>
            <input
              type={form.type}
              name={form.name}
              id={form.name}
              placeholder={form.placeholder}
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