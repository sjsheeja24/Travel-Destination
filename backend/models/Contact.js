// ✅ Corrected Contact Model (backend/models/Contact.js)
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  reply: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




module.exports = mongoose.model("Contact", contactSchema);
