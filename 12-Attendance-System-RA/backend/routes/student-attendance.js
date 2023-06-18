const router = require("express").Router();
const { getAttendance } = require("../controller/student-attendance");

router.get("/status", () => { });
router.get("/:id", getAttendance);

module.exports = router;