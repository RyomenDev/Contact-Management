const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  company: String,
  jobTitle: String,
});

module.exports = mongoose.model("Contact", contactSchema);
