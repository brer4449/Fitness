// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Workout = require("../models/Workout.js");

const WorkoutController = {
  // This is called (when needed) from the route page when a
  // listing of all exercises is needed

  // getAll(req, res) {
  //   Workout.find({}).then(data => {
  //     res.json(data);
  //   });
  // },
  getFinished(req, res) {
    //needs modification! (if workout is DONE or not)
    Workout.findById({}).then(data => {
      res.json(data);
    });
  },
  //saves currently selected workout
  saveSelected(req, res) {
    Workout.create(req.body)
      //more code here, how to select id? Who knows?!?
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  }
};

module.exports = WorkoutController;
