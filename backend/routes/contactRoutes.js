const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    await sendEmail(name, email, message); // ✅ correct


    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
