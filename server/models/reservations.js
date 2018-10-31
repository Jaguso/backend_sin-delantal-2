'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reservations = sequelize.define('Reservations', {
    total: DataTypes.DECIMAL(10,2),
    status: {type: DataTypes.ENUM, values=["inCart", "payed", "cancelled"]},
    paypal: DataTypes.STRING,
    orderdate: DataTypes.DATE
  }, {});
  Reservations.associate = function(models) {
    Reservations.hasOne(models.Restaurants)
    Reservations.hasMany(models.Dishes)
    Reservations.hasOne(models.Comments)
  };
  return Reservations;
};