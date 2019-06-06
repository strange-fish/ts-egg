import { Controller } from 'egg'
import { IFindOptions } from 'sequelize-typescript'

export default abstract class BaseController extends Controller {
  protected success (data: any) {
    this.ctx.status = 200
    this.ctx.body = {
      success: 1,
      data
    }
  }

  protected fail (msg: string, errors?: object) {
    this.ctx.status = 400
    this.ctx.body = {
      success: 0,
      msg,
      errors
    }
  }
  /**
   * @description 简单分页
   * @param name
   * @param options
   */
  protected async paginate<T> (name: string, options?: IFindOptions<T>) {
    const params = this.ctx.query
    this.ctx.validate({
      page: { type: 'int', required: false, default: 1 },
      size: { type: 'int', required: false, default: 10 }
    }, params)

    const res = await this.app.model[name].findAndCountAll({
      ...options,
      limit: params.size,
      offset: params.size * (params.page - 1)
    })

    this.ctx.body = {
      success: 1,
      data: res.rows,
      pageInfo: {
        size: params.size,
        page: params.page,
        total: res.count,
        hasMore: res.count > (params.size * params.page)
      }
    }
  }
}
