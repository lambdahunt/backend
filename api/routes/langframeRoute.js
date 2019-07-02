const express = require("express");
const router = express.Router();
const langFrameModel = require("../helpers/langframeModel");

router.get("/", async (req, res) => {
  try {
    const langframe = await langFrameModel.get();
    res.status(200).json(langframe);
  } catch (error) {
    res.status(500).json({ error: "Error getting the langframe data" });
  }
});

module.exports = router;
