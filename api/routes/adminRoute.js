const express = require("express");
const router = express.Router();
const adminModel = require("../helpers/adminModel");
const secrets = require("../../config/secrets");

//authorization middleware
const { authenticate } = require("../../auth/restricted-middleware");
const jwt = require("jsonwebtoken");

function generateToken(admin) {
  console.log("admin", admin);
  const payload = {
    id: admin.id,
    username: admin.username
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secrets.jwt, options);
}

const bcrypt = require("bcryptjs");

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const admin = await adminModel.get();
//     res.status(200).json(admin);
//   } catch (error) {
//     res.status(500).json({ error: "Error getting admin data." });
//   }
// });
router.get("/", async (req, res) => {
  try {
    const admin = await adminModel.get();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: "Error getting admin data." });
  }
});
// create track
router.post("/track", async (req, res) => {
  const { title, description, duration } = req.body;
  if (!title) {
    res.status(400).json({ error: "Please provide title" });
  }
  if (!description) {
    res.status(400).json({ error: "Please provide description" });
  }
  if (!duration) {
    res.status(400).json({ error: "Please provide duration" });
  }
  try {
    const track = await adminModel.initialize(req.body);
    res.status(201).json(track);
  } catch (error) {
    res.status(500).json({ error: "Error adding track to db." });
  }
});
// create language/framework
router.post("/topic", async (req, res) => {
  const { title, description, trackId } = req.body;
  if (!title) {
    res.status(400).json({ error: "Please provide title" });
  }
  if (!description) {
    res.status(400).json({ error: "Please provide description" });
  }
  if (!trackId) {
    res.status(400).json({ eror: "Please provide track id" });
  }
  try {
    const langframe = await adminModel.attach(req.body);
    res.status(201).json(langframe);
  } catch (error) {
    res.status(500).json({ error: "Error attaching lang/frame to db" });
  }
});
// create lambda contract positions
router.post("/contract", async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ error: "Please provide title" });
  }
  if (!description) {
    res.status(400).json({ error: "Please provide description" });
  }
  try {
    const contract = await adminModel.hire(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ error: "Error adding contract position to db" });
  }
});
// create candidate
router.post("/candidate", async (req, res) => {
  const { email, password, firstname, lastname, track, trackId } = req.body;
  if (!email) {
    res.status(400).json({ error: "Please provide email" });
  }
  if (!password) {
    res.status(400).json({ error: "Please provide password" });
  }
  if (!firstname) {
    res.status(400).json({ error: "Please provide first name" });
  }
  if (!lastname) {
    res.status(400).json({ error: "Please provide last name" });
  }
  if (!track) {
    res.status(400).json({ error: "Please provide track" });
  }
  if (!trackId) {
    res.status(400).json({ error: "Please provide track id" });
  }
  try {
    const candidate = await adminModel.endorse(req.body);
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ error: "Error adding candidate to db." });
  }
});
//register
router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "Please provide username and password" });
  }
  try {
    const hash = bcrypt.hashSync(req.body.password, 12);
    req.body.password = hash;
    const admin = await adminModel.register(req.body);
    const token = generateToken(admin);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error adding admin to db" });
  }
});

module.exports = router;
