'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    celphone: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Restaurants)
    Users.hasMany(models.Reservations)
    Users.hasOne(models.Adress_Users)
  };
  return Users;
};