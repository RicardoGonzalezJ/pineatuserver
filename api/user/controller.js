const model = require('./model');

exports.listOfUsers = async (req, res) => {
  try {
    const userList = await model.selectForUser();
    res.status(201).json({ userLists: userList });
    return;
  } catch (error) {
    console.log('error on user controller.js listOfUsers', error);
  }
};
