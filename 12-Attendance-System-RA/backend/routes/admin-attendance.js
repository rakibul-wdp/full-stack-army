const { getEnable } = require("../controller/admin-attendance");

const router = require("express").Router();

router.get("/enable", getEnable);
router.get("/disable", () => { });
router.get("/status", () => { });

module.exports = router;