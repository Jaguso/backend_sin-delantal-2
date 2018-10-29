'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    pictures: DataTypes.ARRAY
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
  };
  return Dishes;
};