'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address_Restaurants = sequelize.define('Address_Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address_Restaurants.associate = function(models) {
    Address_Restaurants.belongsTo(models.Restaurants)
  };
  return Address_Restaurants;
};