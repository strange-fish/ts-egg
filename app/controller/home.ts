import BaseController from '../baseClass/baseController'

export default class HomeController extends BaseController {
  public async index () {
    const { ctx } = this
    ctx.body = 123
  }
}
