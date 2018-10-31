'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    rating: {type: DataTypes.ENUM, values: ["1", "2", "3", "4", "5"]},
    comment: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Reservations)
  };
  return Comments;
};