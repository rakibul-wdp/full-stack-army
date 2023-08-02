const params = {
  init: {},
};

const useForm = ({ init }) => {
  const state = mapValuesToState(init);
  console.log(state);
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

export default useForm;
