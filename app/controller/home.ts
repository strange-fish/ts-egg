import BaseController from './baseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
    ctx.status = 404;
  }

  public async createUser () {
    const { ctx } = this;
    try {
      const newUser = await this.service.authService.createNewUser(
        ctx.body.name,
        ctx.body.password,
      );

      this.success(newUser);
    } catch (e) {
      ctx.logger.error('创建用户失败', e);
      ctx.body = {
        success: 0,
        msg: '创建用户失败',
      };
    }
  }

  public async login () {
    const { ctx } = this;
    const { userId, password } = ctx.body;
    const user = await ctx.app.model.User.findById(userId);
    let rightCode = false;
    if (user) {
      rightCode = await user.compareCode(password);
    }
    ctx.status = rightCode ? 200 : 401;
    ctx.body = rightCode ? { msg: '登录成功' } : { msg: '密码错误' };
  }
}
