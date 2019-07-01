const express = require("express");
const router = express.Router();
const trackDb = require("../helpers/trackDb");

router.get("/", async (req, res) => {
  try {
    const track = await trackDb.get();
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: "Error getting the track data." });
  }
});

module.exports = router;
