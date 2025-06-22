const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  complday: Number,
  uid: { type: mongoose.Types.ObjectId, ref: "admin" },
  taskstatus: { type: Boolean, default: false }
});

module.exports = mongoose.model("task", taskSchema);