require('dotenv').config();

module.exports = {

  datasource: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    max: 30,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillos: 2000,
  },

};
