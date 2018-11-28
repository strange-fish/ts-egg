import 'egg';
import { PlainObject } from 'egg';

declare module 'egg' {
  interface Application {
    model: IModel
  }
  interface IModel extends PlainObject {
  }
}