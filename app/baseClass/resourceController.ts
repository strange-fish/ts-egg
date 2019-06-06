import { Context } from 'egg'
import BaseController from './baseController'

export default abstract class ResourceController extends BaseController {
  constructor (ctx: Context, private readonly modelName: string) {
    super(ctx)
  }

  index () {
    return this.paginate(this.modelName)
  }
  async create () {
    const newEntity = new this.app.model[this.modelName]()
    Object.assign(newEntity, this.ctx.body)
    const res = await newEntity.save()
    this.success(res)
  }

  async destroy () {
    const params = this.ctx.params
    this.ctx.validate({
      id: 'int'
    }, params)

    const res = await this.app.model[this.modelName].destroy({ where: { id: params.id } })
    if (!res) {
      this.fail(`resource doesn't exist!`)
    } else {
      this.success('')
    }
  }
}