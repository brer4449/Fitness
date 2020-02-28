const express = require("express");
const router = express.Router();

const ExerciseController = require("../controllers/exerciseController");

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseController.getAll);

module.exports = router;
