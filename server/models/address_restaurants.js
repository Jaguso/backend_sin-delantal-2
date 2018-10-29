'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address_Restaurants = sequelize.define('Address_Restaurants', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address_Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Address_Restaurants;
};