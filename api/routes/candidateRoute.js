const express = require("express");
const router = express.Router();
const candidateModel = require("../helpers/candidateModel");

router.get("/", async (req, res) => {
  try {
    const candidate = await candidateModel.get();
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ error: "Error getting the candidate data" });
  }
});

module.exports = router;
