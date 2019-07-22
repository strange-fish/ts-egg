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
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  session: {
    enable: false,
  },
};

export default plugin;
