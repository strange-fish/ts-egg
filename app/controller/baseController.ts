import {Controller} from 'egg';

export default class BaseController extends Controller {
  protected success (data: any) {
    this.ctx.status = 200;
    this.ctx.body = {
      success: 1,
      data,
    };
  }

  protected fail (msg: string, errors?: object) {
    this.ctx.status = 400;
    this.ctx.body = {
      success: 0,
      msg,
      errors,
    };
  }
}
