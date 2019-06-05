import BaseController from './baseController'

export default class HomeController extends BaseController {
  public async index () {
    const { ctx } = this
    ctx.body = 123
    ctx.status = 404
  }
}
