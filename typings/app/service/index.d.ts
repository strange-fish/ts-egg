// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthService from '../../../app/service/AuthService';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    authService: ExportAuthService;
    test: ExportTest;
  }
}
