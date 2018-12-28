import { QueryInterface, SequelizeStatic } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    await queryInterface.createTable('user_tokens', {
      provider: {
        type: sequelize.STRING,
      },
      uid: {
        type: sequelize.INTEGER.UNSIGNED,
      },
      user_id: {
        type: sequelize.INTEGER.UNSIGNED,
      },
      token: {
        type: sequelize.STRING,
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('user_tokens');
  },
};
