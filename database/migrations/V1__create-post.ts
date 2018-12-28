import { QueryInterface, SequelizeStatic } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, sequelize: SequelizeStatic) => {
    await queryInterface.createTable('posts', {
      id: {
        type: sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: sequelize.INTEGER(11).UNSIGNED,
      },
      title: {
        type: sequelize.STRING,
      },
      content: {
        type: sequelize.TEXT,
        defaultValue: '',
      },
      create_at: {
        type: sequelize.DATE,
      },
      update_at: {
        type: sequelize.DATE,
      },
      delete_at: {
        type: sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('posts');
  },
};
