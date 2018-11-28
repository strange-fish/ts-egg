// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseController from '../../../app/controller/baseController';
import Home from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    baseController: BaseController;
    home: Home;
  }
}
