const { Model, DataTypes } = require('sequelize');
const { Tag, Product } = require('.');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pro_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }

    },
    tag_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize: require('../config/connection'),
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
