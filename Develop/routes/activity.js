const express = require("express");
const router = express.Router();

const ActivityController = require("../controllers/activityController");

// GET  "/api/activity"
// Calls controller which will return all activities for a specific workout
router.get("/", ActivityController.getAll);

module.exports = router;
