import BaseController from './baseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
    ctx.status = 404;
  }

  public async findUserById () {
    const { ctx } = this;
    const { model } = ctx.app;

    const id = ctx.params.userId;

    const user = await model.User.findById(id);

    if (!user) {
      ctx.status = 404;
      ctx.body = {
        msg: '用户不存在',
      };
    } else {
      ctx.body = user;
    }
  }
  public async createUser () {
    const { ctx } = this;
    const { model } = ctx.app;
    try {
      const newUser = new model.User();
      const { body } = ctx.request;
      newUser.name = body.name;
      await newUser.setPassword(body.password);
      await newUser.save();
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
    ctx.status = rightCode ? 200 : 400;
    ctx.body = rightCode ? { msg: '登录成功' } : { msg: '密码错误' };
  }
}
