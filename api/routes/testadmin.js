const express = require("express");
const router = express.Router();
const knex = require("../../data/dbConfig");

router.get("/", async (req, res) => {
  try {
    const admin = await knex.admin.get();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});
module.exports = router;
