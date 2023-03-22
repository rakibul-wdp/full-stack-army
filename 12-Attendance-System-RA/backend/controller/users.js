const User = require("../models/User");
const userService = require("../service/user");
const authService = require("../service/auth");

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getUsers
}