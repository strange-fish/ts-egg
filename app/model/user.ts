import * as bcrypt from 'bcrypt';
import { Application } from 'egg';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  DefaultScope,
  Model,
  PrimaryKey,
  Scopes,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Scopes({
  withPassword: {
    attributes: {
      exclude: [],
    },
  },
})
@DefaultScope({
  attributes: {
    exclude: ['password'],
  },
})
@Table({
  timestamps: true,
})
export default class User extends Model<User> {
  public static app: Application;

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  password: string;

  @Unique
  @Column
  mobile: string;

  @Column
  isActive: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  async setPassword (val: string) {
    const hash = await bcrypt.hash(val, 6);
    this.setDataValue('password', hash);
    return true;
  }
  /**
   * @description hash the code and compare
   * @param code
   */
  async compareCode(code: string): Promise<boolean> {
    return await bcrypt.compare(code, this.password);
  }
}
