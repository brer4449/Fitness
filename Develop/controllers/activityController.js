// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/Activity.js");

const ActivityController = {
  // This is called (when needed) from the route page when a
  // listing of all exercises is needed
  getAll(req, res) {
    Activity.find({}).then(data => {
      res.json(data);
    });
  },
  //gets specific activity and adds it to workout (via id)
  postOne(req, res) {
    Activity.create(req.body)
      //needs modification! (if activity is DONE or not)
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.json(err);
      });
  }
};

module.exports = ActivityController;
