import { Service } from 'egg';
import User from '../model/user';

export default class AuthService extends Service {
  async createNewUser (name: string, password: string): Promise<User> {
    const newUser = new User();
    newUser.name = name;
    await newUser.setPassword(password);
    await newUser.save();
    return newUser;
  }
}
