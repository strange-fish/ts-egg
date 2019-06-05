import 'egg';
import { PlainObject } from 'egg';
import User from '../app/model/user';

declare module 'egg' {
  interface Application {
    model: IModel;
  }
  interface IModel extends PlainObject {
  }

  interface Context {
    user: User;
  }
}