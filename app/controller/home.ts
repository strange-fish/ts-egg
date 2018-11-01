import { Controller } from 'egg';

enum type {
  name = 1,
  friend = 2,
}
export default class HomeController extends Controller {
  public static types = type;
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
  }
  /**
   * @param id
   * @param name
   */
  public async testIndex () {
    const { ctx } = this;
    // const { id, name } = ctx.query;
  }
}