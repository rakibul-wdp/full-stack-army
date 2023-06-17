const AdminAttendance = require("../models/AdminAttendance");
const error = require("../utils/error");

const getEnable = async (req, res, next) => {
  try {
    const running = await AdminAttendance.findOne({ status: "RUNNING" });
    if (running) {
      throw error("Already Running", 400);
    }
    const attendance = new AdminAttendance({});
    await attendance.save();
    return res.status(201).json({ message: "Success", attendance });
  } catch (e) {
    next(e);
  }
};

const getDisable = (req, res, next) => { };

module.exports = {
  getEnable,
  getDisable
}