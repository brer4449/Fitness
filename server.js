//Server will go here

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

const db = require("./models");

const dbName = "workout";
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connecting to MongoDB via mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`, {
  useNewUrlParser: true
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => res.json(err));
});

app.put("/api/workouts", (req, res) => {});

app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => res.json(err));
});

app.get("/api/workouts/range", (req, res) => {});
// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
