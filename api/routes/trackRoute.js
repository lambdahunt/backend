const express = require("express");
const router = express.Router();
const trackModel = require("../helpers/trackModel");

router.get("/", async (req, res) => {
  try {
    const track = await trackModel.get();
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: "Error getting the track data." });
  }
});

module.exports = router;
