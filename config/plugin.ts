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
  passortLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
};

export default plugin;
