const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  designation: String,
  password: String,
});

module.exports = mongoose.model("admin", adminSchema);
