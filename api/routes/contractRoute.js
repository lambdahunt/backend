const express = require("express");
const router = express.Router();
const contractModel = require("../helpers/contractModel");

router.get("/", async (req, res) => {
  try {
    const contract = await contractModel.get();
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ error: "Error getting the contract data" });
  }
});

module.exports = router;
