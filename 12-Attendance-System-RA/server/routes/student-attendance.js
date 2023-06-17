const router = require("express").Router();
const { getAttendanceStatus, getAttendance } = require("../controller/student-attendance");

router.get("/status", getAttendanceStatus);
router.get("/:id", getAttendance);

module.exports = router;