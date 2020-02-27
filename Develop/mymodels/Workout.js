const mongoose = require("mongoose");
const ActivitySchema = require("./Activity");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: String,
  day: Date,
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity"
    }
  ]
  // exercises: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
