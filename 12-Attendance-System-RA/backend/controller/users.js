const User = require("../models/User");
const userService = require("../service/user");
const authService = require("../service/auth");
const error = require("../utils/error");

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
}

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;

  try {
    const user = await authService.registerService({ name, email, password, roles, accountStatus });
    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getUsers,
  getUserById,
  postUser,
}