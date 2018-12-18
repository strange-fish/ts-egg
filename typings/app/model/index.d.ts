// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Player from '../../../app/model/player';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Player: typeof Player;
    User: typeof User;
  }
}
