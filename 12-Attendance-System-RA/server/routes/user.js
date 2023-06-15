const router = require("express").Router();

/**
 * GET user by id or email
 */
router.get("/:userId", () => { });

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
router.get("/", () => { });

/**
 * create a new user
 */
router.post("/", () => { });

module.exports = router;