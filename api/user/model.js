const dbcon = require('../../config/dbcon/dbcon');

exports.selectForUser = (cb) => {
  const query = 'SELECT * FROM users;';
  dbcon.query(query, cb);
};
