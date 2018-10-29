'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    total: DataTypes.DECIMAL,
    status: DataTypes.ENUM,
    paypal: DataTypes.STRING,
    orderdate: DataTypes.DATE
  }, {});
  Reservations.associate = function(models) {
    // associations can be defined here
  };
  return Reservations;
};