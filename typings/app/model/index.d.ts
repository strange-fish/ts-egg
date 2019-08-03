// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportAuthorization from '../../../app/model/authorization';
import ExportCategory from '../../../app/model/category';
import ExportComment from '../../../app/model/comment';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface Application {
    model: IModel;
  }

  interface IModel {
    Article: typeof ExportArticle;
    Authorization: typeof ExportAuthorization;
    Category: typeof ExportCategory;
    Comment: typeof ExportComment;
    User: typeof ExportUser;
  }
}
