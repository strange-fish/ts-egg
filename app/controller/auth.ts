import BaseController from './baseController';

export default class AuthController extends BaseController {
  async login () {
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
        name: 'string',
        password: 'string',
        mobile: 'string | number',
      });

      const newUser = await this.service.authService.createNewUser(
        params.name,
        params.password,
        params.mobile,
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
}