const express = require("express");
const router = express.Router();

const WorkoutController = require("../controllers/workoutController");

// GET  "/api/workout"
// Calls controller which will return all activities for a specific workout
// router.get("/", WorkoutController.getAll);
// router.get("/", WorkoutController.getFinished);
router.post("/", WorkoutController.saveSelected);

module.exports = router;
