// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportAuth from '../../../app/controller/auth';
import ExportComment from '../../../app/controller/comment';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    auth: ExportAuth;
    comment: ExportComment;
    home: ExportHome;
  }
}
