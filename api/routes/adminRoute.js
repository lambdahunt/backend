const express = require("express");
const router = express.Router();
const adminDb = require("../helpers/adminDb");

//authorization middleware
const { authenticate } = require("../../auth/restricted-middleware");

router.get("/", authenticate, async (req, res) => {
  try {
    const admin = await adminDb.get();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: "Error getting admin data." });
  }
});

module.exports = router;
