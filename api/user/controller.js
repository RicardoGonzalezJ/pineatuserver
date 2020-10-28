const model = require('./model');

exports.listOfUsers = (req, res) => {
  model.selectForUser((error, resp) => {
    if (error) {
      console.log('Error on user controller.js', error);
    } else {
      res.status(201).json(resp);
    }
  });
};
