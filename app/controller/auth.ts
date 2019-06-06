import BaseController from '../baseClass/baseController'

export default class AuthController extends BaseController {
  public async login () {
    const { ctx } = this
    const param = ctx.request.body

    ctx.validate({
      mobile: 'string',
      password: 'string'
    }, param)
    const token = await ctx.service.authService.loginByPassword(
        param.mobile,
        param.password
      )
    this.success({ token })
  }

  public async register () {
    const { ctx } = this
    const params = ctx.request.body
    ctx.validate({
      username: 'string',
      password: 'string',
      mobile: 'string'
    }, params)

    const newUser = await this.service.authService.createNewUser(
        params.username,
        params.password,
        params.mobile
    )

    this.success(newUser)
  }

  /**
   * logout
   */
  public async logout () {
    const { ctx } = this
    await this.service.authService.deleteAuth(ctx.user.id)
    this.success('')
  }
}