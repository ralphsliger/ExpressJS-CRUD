'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('tasks', [
        {id: 1, description: 'curso backend',createdAt: new Date(),updatedAt: new Date()},
        {id: 2, description: 'curso backend2',createdAt: new Date(),updatedAt: new Date()},
        {id: 3, description: 'curso backend3',createdAt: new Date(),updatedAt: new Date()}
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('tasks', null, {});
    
  }
};
