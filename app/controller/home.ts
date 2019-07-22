import BaseController from '../baseClass/baseController'

export default class HomeController extends BaseController {
  public async index () {
    const content = await this.app.redis.get('name')
    this.success(content)
  }
}
