'use strict';
module.exports = function(sequelize, DataTypes) {
  var ipAddress = sequelize.define('ipAddress', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    ipAddress: DataTypes.STRING,
    time: DataTypes.FLOAT,
    uptime: DataTypes.INTEGER,
    downtime: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ipAddress;
};
