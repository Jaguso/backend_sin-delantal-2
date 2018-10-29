'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    category: DataTypes.ENUM,
    pictures: DataTypes.ARRAY,
    opens: DataTypes.STRING,
    closes: DataTypes.STRING
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};