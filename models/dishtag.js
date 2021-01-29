'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DishTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DishTag.belongsTo(models.Dish,{
        foreignKey: 'DishId'
      })

      DishTag.belongsTo(models.Tag,{
        foreignKey: 'TagId'
      })
    }
  };
  DishTag.init({
    DishId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DishTag',
  });
  return DishTag;
};