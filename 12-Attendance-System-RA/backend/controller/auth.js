const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {

  } catch (e) {
    next(e);
  }
}

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {

  } catch (e) {
    next(e);
  }
}

module.exports = {
  registerController,
  loginController
}