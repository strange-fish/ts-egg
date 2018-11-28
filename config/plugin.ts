import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelizeTypescript: {
    enable: true,
    package: '@strange-fish/egg-sequelize-typescript',
  },
};

export default plugin;
