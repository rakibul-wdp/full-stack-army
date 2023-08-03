import { useState } from "react";
import { deepClone } from "../utils/object-utils";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object/boolean)} validate
 *
 * create forms using this useForm hook easily
 * @param {Param} param
 * @returns
 */

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);
    oldState[key].value = value;

    const values = mapStateToValues(state);
    const { errors } = checkValidity(values);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  return {
    formState: state,
    handleChange,
  };
};

export default useForm;

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
