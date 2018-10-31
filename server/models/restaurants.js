'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    category: {type: DataTypes.ENUM, values:["chinese", "mexican", "italian", "fastfood"]},
    pictures: DataTypes.ARRAY(DataTypes.STRING),
    opens: DataTypes.STRING,
    closes: DataTypes.STRING
  }, {});
  Restaurants.associate = function(models) {
    Restaurants.belongsTo(models.Users)
    Restaurants.hasOne(models.Address_Restaurants)
    Restaurants.hasMany(models.Dishes)
    Restaurants.belongsTo(models.Reservations)
  };
  return Restaurants;
};