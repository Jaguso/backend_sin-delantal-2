'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    rating: DataTypes.ENUM,
    comment: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};