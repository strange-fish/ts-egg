// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import { EggPluginItem } from 'egg';
import './node_modules/@strange-fish/egg-sequelize-typescript';
import './node_modules/egg-development';
import './node_modules/egg-i18n';
import './node_modules/egg-jsonp';
import './node_modules/egg-logrotator';
import './node_modules/egg-multipart';
import './node_modules/egg-onerror';
import './node_modules/egg-passport';
import './node_modules/egg-schedule';
import './node_modules/egg-security';
import './node_modules/egg-session';
import './node_modules/egg-static';
import './node_modules/egg-view';
import './node_modules/egg-watcher';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    sequelizeTypescript?: EggPluginItem;
    passport?: EggPluginItem;
  }
}