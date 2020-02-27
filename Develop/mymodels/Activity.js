const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  distance: Number,
  reps: Number,
  sets: Number
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
