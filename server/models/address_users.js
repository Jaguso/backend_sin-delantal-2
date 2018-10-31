'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address_Users = sequelize.define('Address_Users', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address_Users.associate = function(models) {
    Address_Users.belongsTo(models.Users)
  };
  return Address_Users;
};