const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: require('../config/connection'),
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
