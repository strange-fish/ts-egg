import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540793094490_7309';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.multipart = {
    mode: 'file',
  };

  config.security = {
    csrf: false,
  };

  config.sequelizeTypescript = {
    dialect: 'mysql',
    database: 'test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'myjasmine',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
