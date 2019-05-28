// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorization from '../../../app/model/authorization';
import ExportCategory from '../../../app/model/category';
import ExportPlayer from '../../../app/model/player';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Authorization: typeof ExportAuthorization;
    Category: typeof ExportCategory;
    Player: typeof ExportPlayer;
    User: typeof ExportUser;
  }
}
