// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticleService from '../../../app/service/ArticleService';
import ExportAuthService from '../../../app/service/AuthService';
import ExportCommentService from '../../../app/service/CommentService';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    articleService: ExportArticleService;
    authService: ExportAuthService;
    commentService: ExportCommentService;
    test: ExportTest;
  }
}
