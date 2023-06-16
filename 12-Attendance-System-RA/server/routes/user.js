const router = require("express").Router();
const userController = require("../controller/users");

/**
 * GET user by id or email
 */
router.get("/:userId", userController.getUserById);

/**
 * Update user by id
 * @method PUT
 */
router.put("/:userId", () => { });

/**
 * Update user by id
 * @method PATCH
 */
router.patch("/:userId", () => { });

/**
 * DELETE user by id
 */
router.delete("/:userId", () => { });

/**
 * GET all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @route /api/v1/users?sort=["by","name"]
 * @method GET
 * @visibility Private
 */
router.get("/", userController.getUsers);

/**
 * create a new user
 */
router.post("/", () => { });

module.exports = router;