// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Exercise = require("../models/Exercise.js");

const ExerciseController = {
  // This is called (when needed) from the route page when a
  // listing of all exercises is needed
  getAll(req, res) {
    Exercise.find({}).then(data => {
      res.json(data);
    });
  }
};

module.exports = ExerciseController;
