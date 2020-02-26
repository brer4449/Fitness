const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: String,
  day: Date,
  activities: [
    {
      type: Schema.Types.ObjectId,
      name: "Activity"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
