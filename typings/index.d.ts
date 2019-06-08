import 'egg';
import { PlainObject } from 'egg';
import User from '../app/model/user';

declare module 'egg' {
  interface Context {
    user: User;
  }
}