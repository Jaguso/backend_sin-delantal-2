'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address_Users = sequelize.define('Address_Users', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address_Users.associate = function(models) {
    // associations can be defined here
  };
  return Address_Users;
};