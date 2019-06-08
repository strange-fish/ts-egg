import * as bcrypt from 'bcrypt'
import { Application } from 'egg'
import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  DefaultScope,
  Model,
  PrimaryKey,
  Scopes,
  Table,
  Unique,
  UpdatedAt
} from 'sequelize-typescript'

@Scopes({
  withPassword: {}
})
@DefaultScope({
  attributes: {
    exclude: ['password']
  }
})
@Table
export default class User extends Model<User> {
  public static app: Application

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  password: string

  @Unique
  @Column(DataType.STRING({ length: 20 }))
  mobile: string

  @Default(false)
  @Column
  isActive: boolean

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  async setPassword (val: string) {
    const hash = await bcrypt.hash(val, 6)
    this.setDataValue('password', hash)
    return true
  }

  static hashPassword (val: string) {
    return bcrypt.hash(val, 6)
  }
  /**
   * @description hash the code and compare
   * @param code
   */
  async compareCode (code: string): Promise<boolean> {
    return await bcrypt.compare(code, this.password)
  }
}
