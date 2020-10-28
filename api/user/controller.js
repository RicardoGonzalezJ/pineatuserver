const model = require('./model');

exports.listOfUsers = (req, res) => {
  model.selectForUser((err, resp) => {
    if (err) {
      console.log('Error on user controllers.js', err);
    } else {
      res.status(201).json(resp);
    }
  });
};
