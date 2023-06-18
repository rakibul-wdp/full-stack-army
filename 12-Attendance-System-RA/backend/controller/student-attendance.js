const AdminAttendance = require("../models/AdminAttendance");
const StudentAttendance = require("../models/StudentAttendance");
const error = require("../utils/error");

const getAttendance = async (req, res, next) => {
  const { id } = req.params;

  try {
    /**
     * step 1 - find admin attendance by id
     * step 2 - Check if it is running or not
     * step 3 - check already register or not
     * step 4 - register entry
     */

    const adminAttendance = await AdminAttendance.findById(id);

    if (!adminAttendance) {
      throw error("Invalid Attendance ID", 400);
    }

    if (adminAttendance.status === "COMPLETED") {
      throw error("Attendance Not Completed");
    }

    let attendance = await StudentAttendance.findOne({ adminAttendance: id, user: req.user._id });

    if (attendance) {
      throw error("Already Register", 400);
    }

    attendance = new StudentAttendance({
      user: req.user._id,
      adminAttendance: id
    })
    await attendance.save();

    return res.status(201).json(attendance);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAttendance,
}