const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

// POST route to save message + send email
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    await sendEmail(contact); // ✅ Send email after saving

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Existing routes here...
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.put("/:id/reply", async (req, res) => {
  const { reply } = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { reply },
      { new: true }
    );
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Reply update failed" });
  }
});

module.exports = router;
