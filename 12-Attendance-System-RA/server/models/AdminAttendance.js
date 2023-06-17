const { Schema, model } = require("mongoose");

const adminAttendanceSchema = new Schema({
  timeLimit: Number,
  status: String,
}, { timestamps: true });

const AdminAttendance = model("AdminAttendance", adminAttendanceSchema);

module.exports = AdminAttendance;