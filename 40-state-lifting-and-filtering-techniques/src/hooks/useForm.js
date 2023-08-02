import { useState } from "react";

const params = {
  init: {},
};

const useForm = ({ init }) => {
  const [state, setState] = useState(mapValuesToState(init));

  return {
    formState: state,
  };
};

// helper function
const mapValuesToState = (values) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      focused: false,
      touched: false,
    };

    return acc;
  }, {});
};

const mapStateToValues = (state) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur].value;

    return acc;
  }, {});
};

export default useForm;
