const express = require("express");
const router = express.Router();
const candifo = require("../helpers/candinfoModel");


router.get("/", async (req, res) => {
    try {
     const candInfo = await candifo.find();
     res.status(200).json(candInfo)
    } catch (error) {
      res.status(404).json({ message: "The Action could not be found" });
    }
  });
  
router.get("/:id", async (req, res) => {
  try {
    const candInfo = await candifo.findById(req.params.id);

    if (candInfo) {
      res.status(200).json(candInfo);
    } else {
      res.status(404).json({ message: "Info not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the Info"
    });
  }
});

router.post("/", async (req, res) => {
    try {
      const candInfo = await candifo.add(req.body);
      res.status(201).json(candInfo);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error adding the candidate info"
      });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const count = await candifo.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: "The info of candidate has been removed" });
      } else {
        res.status(404).json({ message: "The info of candidate could not be found" });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error removing info of candidate"
      });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const candInfo = await candifo.update(req.params.id, req.body);
      if (candInfo) {
        res.status(200).json(candInfo);
      } else {
        res.status(404).json({ message: "The info of candidate could not be found" });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error updating the info of candidate"
      });
    }
  });

  router.get("/:id/post", async (req, res) => {
    const { id } = req.params;
  
    try {
      const actions = await candifo.findPost(id);
  
      if (actions.length) {
        res.json(actions);
      } else {
        res.status(404).json({ err: "no post for this candidate" });
      }
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  router.get("/:id/projects", async (req, res) => {
    const { id } = req.params;
  
    try {
      const projects = await candifo.findProject(id);
  
      if (projects.length) {
        res.json(projects);
      } else {
        res.status(404).json({ err: "no projects for this candidate" });
      }
    } catch (err) {
      res.status(500).json({ err });
    }
  });


 
  module.exports = router;