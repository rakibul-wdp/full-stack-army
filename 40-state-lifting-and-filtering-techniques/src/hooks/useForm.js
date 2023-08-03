import { useState } from "react";
import { deepClone, isObjEmpty } from "../utils/object-utils";

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

    const values = mapStateToKeys(oldState, "value");
    const { errors } = checkValidity(values);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;

    const values = mapStateToKeys(state, "value");
    const { errors } = checkValidity(values);

    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    if (typeof validate === "boolean") {
      if (validate) {
        cb({
          values: mapStateToKeys(state, "value"),
          touched: mapStateToKeys(state, "touched"),
          focused: mapStateToKeys(state, "focused"),
          error: mapStateToKeys(state, "error"),
          hasError: false,
        });
      } else {
        cb({
          errors: mapStateToKeys(state, "error"),
          hasError: true,
        });
      }
      return;
    }

    if (typeof validate === "function") {
      const values = mapStateToKeys(state, "values");
      const { errors } = validate(values);
      const hasError = !isObjEmpty(errors);

      if (hasError) {
        cb({
          errors,
          hasError,
        });
      } else {
        cb({
          values: mapStateToKeys(state, "value"),
          touched: mapStateToKeys(state, "touched"),
          focused: mapStateToKeys(state, "focused"),
          error: mapStateToKeys(state, "error"),
          hasError,
        });
      }
    }

    if (isValid) {
      console.log(state);
    } else {
      const oldState = deepClone(state);
      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });

      setState(oldState);
    }
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
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

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];

    return acc;
  }, {});
};
