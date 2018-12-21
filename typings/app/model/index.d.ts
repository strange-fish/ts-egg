// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Category from '../../../app/model/category';
import Player from '../../../app/model/player';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Category: typeof Category;
    Player: typeof Player;
    User: typeof User;
  }
}
