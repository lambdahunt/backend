const express = require("express");
const router = express.Router();
const projects = require("../helpers/projectModel");


router.get("/", async (req, res) => {
    try {
     const project = await projects.findProject();
     res.status(200).json(project)
    } catch (error) {
      res.status(404).json({ message: "The Project could not be found" });
    }
  });
  module.exports = router;