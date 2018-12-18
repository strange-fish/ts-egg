import { Application } from 'egg';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class User extends Model<User> {
  static app: Application;

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  get password(): string {
    return this.getDataValue('password');
  }
  set password(val: string) {
    this.setDataValue('password', val);
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  /**
   * @description hash the code and compare
   * @param code
   */
  compareCode(code): boolean {
    return this.password === code;
  }
}
