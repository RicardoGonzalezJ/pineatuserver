const dbcon = require('../../config/dbcon/dbcon');

exports.selectForUser = (cb) => {
  const query = 'SELECT * FROM users;';
  return dbcon.query(query, cb);
};
