import { QueryInterface, SequelizeStatic } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.STRING(25),
      },
      password: {
        type: sequelize.STRING(255),
      },
      mobile: {
        type: sequelize.STRING(16),
      },
      created_at: sequelize.DATE,
      updated_at: sequelize.DATE,
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  },
};
