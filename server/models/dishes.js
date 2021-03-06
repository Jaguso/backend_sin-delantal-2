'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dishes = sequelize.define('Dishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT,
    pictures: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Dishes.associate = function(models) {
    Dishes.belongsTo(models.Restaurants)
    Dishes.belongsTo(models.Reservations)
  };
  return Dishes;
};