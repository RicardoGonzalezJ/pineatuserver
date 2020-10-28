const dbcon = require('../../config/dbcon/dbcon');

exports.selectForUser = async () => {
  const query = 'SELECT * FROM users;';
  let response;
  try {
    response = await dbcon.query(query);
  } catch (error) {
    console.log('error on user model.js selectForUser', error);
  }
  return response;
};
