import BaseController from './baseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
    ctx.status = 404;
  }
  /**
   * @param id
   * @param name
   * @description 获取所有玩家
   */
  public async testIndex () {
    const { ctx } = this;
    const players = await this.ctx.app.model.Player.findAll();
    ctx.body = players;
    ctx.status = 200;
  }
  public async createUser () {
    const { ctx } = this;
    const { model } = ctx.app;
    try {
      const newUser = new model.Player();
      newUser.name = 'zzp';
      newUser.num = 1;
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
      rightCode = user.compareCode(password);
    }
    ctx.status = rightCode ? 200 : 400;
    ctx.body = rightCode ? { msg: '登录成功' } : { msg: '密码错误' };
  }

  public async sendFile () {
    const { ctx } = this;
    const { model } = ctx.app;
  }
}
