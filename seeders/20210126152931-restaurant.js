'use strict';
const restaurants = require('../data/restaurants.json')
restaurants.forEach(restaurant => {
  restaurant.createdAt = new Date()
  restaurant.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Vendors', restaurants, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vendors', null,{})
    
  }
};
