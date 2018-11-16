import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
    ctx.status = 404;
  }
  /**
   * @description 就是测试而已·
   * @param id
   * @param name
   */
  public async testIndex () {
    const names = this.ctx.service.test.getThingsDone('name');
    this.ctx.body = names;
    this.ctx.status = 200;
  }
}
