import { QueryInterface, SequelizeStatic } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.STRING(25),
      },
      password: {
        type: sequelize.STRING(255),
      },
      age: {
        type: sequelize.INTEGER(3),
        allowNull: true,
      },
      createdAt: sequelize.DATE,
      updatedAt: sequelize.DATE,
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    queryInterface.dropTable('users');
  },
};