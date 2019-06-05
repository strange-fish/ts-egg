import { Service } from 'egg';

export default class AuthService extends Service {
  async createNewUser (name: string, password: string, mobile: string) {
    const newUser = new this.app.model.User();
    newUser.name = name;
    newUser.mobile = mobile;
    await newUser.setPassword(password);
    const resUser = await newUser.save();
    delete resUser.password;
    return resUser;
  }

  async createAuthorization (userId: number) {
    await this.deleteAuth(userId);
    const auth = new this.app.model.Authorization();
    auth.userId = userId;
    const savedAuth = await auth.save();
    return savedAuth;
  }

  async loginByPassword (mobile: string, password: string) {
    const user = await this.app.model.User.scope('withPassword').findOne({ where: { mobile }});
    if (user) {
      const isPasswordCorrect = await user.compareCode(password);
      if (isPasswordCorrect) {
        const auth = await this.createAuthorization(user.id);
        return auth.token;
      } else {
        throw Error(`password incorrect!`);
      }
    } else {
      throw Error(`user doesn't exist!`);
    }
  }

  async deleteAuth (userId: number) {
    return this.app.model.Authorization.destroy({ where: {
      userId,
    }});
  }
}
