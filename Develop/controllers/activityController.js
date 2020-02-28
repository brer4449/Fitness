// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/Activity.js");

const ActivityController = {
  // This is called (when needed) from the route page when a
  // listing of all exercises is needed
  getAll(req, res) {
    Activity.find({}).then(data => {
      res.json(data);
    });
  }
};

module.exports = ActivityController;
