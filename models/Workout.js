const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  distance: Number,
  reps: Number,
  sets: Number
});

const WorkoutSchema = new Schema({
  exercises: [ExerciseSchema],
  day: Date
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
