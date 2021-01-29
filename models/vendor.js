'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Dish, {
        foreignKey: 'VendorId'
      })
    }
  };
  Vendor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};