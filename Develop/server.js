const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dbconfig = require("./db/config");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Use express router to register routes as middleware
app.use("/api/activity", require("./routes/activity"));
app.use("/api/exercise", require("./routes/exercise"));
app.use("/api/workout", require("./routes/workout"));

//clears database in development environment
db.Workout.remove({}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
db.Exercise.remove({}, (err, res) => {
  if (err) {
    console.log(err);
  } else console.log(res);
});
db.Activity.remove({}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

const exerciseSEED = [
  { name: "Bench Press" },
  { name: "DB Bench" },
  { name: "Pec Dec" },
  { name: "Incline Bench" },
  { name: "Military Press" },
  { name: "Arnold Press" },
  { name: "Lateral Flys" },
  { name: "Rear-delt Flys" },
  { name: "Yates Row" },
  { name: "DB Row" },
  { name: "Weighed Pull-ups" },
  { name: "Shrugs" },
  { name: "Lat Pull" },
  { name: "Low-Bar Squat" },
  { name: "Lunges" },
  { name: "Quad Extensions" },
  { name: "Calve Raises" },
  { name: "Deadlift" },
  { name: "Back Extension" },
  { name: "Hamstring Curls" },
  { name: "Band Extensions" },
  { name: "Bicep Curl" },
  { name: "Hammer Curl" },
  { name: "Barbel Curl" },
  { name: "Tricep Extensions" },
  { name: "Weighted Dips" },
  { name: "Skull Crushers" }
];
db.Exercise.insertMany(exerciseSEED, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongofitness",
  dbconfig.settings
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
