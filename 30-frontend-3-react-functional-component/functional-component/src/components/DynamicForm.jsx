import React from 'react';

const formFields = {
  "name": {
    "label": "What is Your Name?",
    "type": "text",
    "placeholder": "John Doe"
  },
  "email": {
    "type": "email",
    "label": "What is Your Email?",
    "placeholder": "john@example.com"
  },
  "phone": {
    "type": "tel",
    "label": "What is Your Phone?",
    "placeholder": "+8801580530145"
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

console.log(mapObjectToArray(formFields));

const DynamicForm = () => {
  return (
    <div>DynamicForm</div>
  )
}

export default DynamicForm;