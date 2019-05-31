import { Service } from 'egg';

export default class AuthService extends Service {
  async createNewUser (name: string, password: string) {
    const newUser = new this.app.model.User();
    newUser.name = name;
    await newUser.setPassword(password);
    await newUser.save();
    return newUser;
  }

  async createAuthorization (userId: number) {
    const auth = new this.app.model.Authorization();
    auth.userId = userId;
    const savedAuth = await auth.save();
    return savedAuth;
  }
}
