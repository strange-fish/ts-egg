import {Controller} from 'egg';

export default class BaseController extends Controller {
  public success (data) {
    this.ctx.status = 200;
    this.ctx.body = {
      success: 1,
      data,
    };
  }
}
