'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
   
    static associate(models) {
        Dish.belongsTo(models.Vendor, {
          foreignKey: "VendorId",
          targetKey: 'id'
        })
        Dish.belongsToMany(models.Tag, {
          through: models.DishTag,
          foreignKey: 'DishId'
        })
    }
  };
  Dish.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    VendorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};