const User = require("../models/User");

const findUserByProperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }
  return User.findOne({ [key]: value });
}

module.exports = {
  findUserByProperty
}