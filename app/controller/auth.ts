import BaseController from './baseController';

export default class AuthController extends BaseController {
  public async login () {
    const { ctx } = this;
    const param = ctx.request.body;

    try {
      ctx.validate({
        mobile: 'string',
        password: 'string',
      }, param);

      const token = await ctx.service.authService.loginByPassword(
        param.mobile,
        param.password,
      );
      this.success({ token });
    } catch (err) {
      this.fail(err.message, err.errors);
    }
  }

  public async register () {
    const { ctx } = this;
    const params = ctx.request.body;
    try {
      ctx.validate({
        username: 'string',
        password: 'string',
        mobile: 'string',
      });

      const newUser = await this.service.authService.createNewUser(
        params.username,
        params.password,
        params.mobile,
      );

      this.success(newUser);
    } catch (e) {
      ctx.logger.error('创建用户失败', e);
      this.fail('创建用户失败', e.errors);
    }
  }

  /**
   * logout
   */
  public async logout() {
    const { ctx } = this;
    await this.service.authService.deleteAuth(ctx.user.id);
    this.success('');
  }
}