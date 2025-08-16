const express = require("express");
const router = express.Router();
const Place = require("../models/place");

// GET all places
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new place
router.post("/", async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newPlace = new Place({ name, description });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
