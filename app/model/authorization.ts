import {Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export default class Authorization extends Model<Authorization> {
  @Column
  uid: number;

  @Column
  userId: number;

  @Column
  provider: string;

  @PrimaryKey
  @Column
  token: string;

  @CreatedAt
  createAt: Date;

  @UpdatedAt
  updateAt: Date;
}
