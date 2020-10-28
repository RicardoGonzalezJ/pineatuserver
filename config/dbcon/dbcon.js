const { Pool } = require('pg');

const datasource = require('./keys');

const pool = new Pool(datasource);

if (!pool) {
  console.log('connection error...');
} else {
  console.log('connected to postgresql to database:', pool.options.database);
}

module.exports = pool;
