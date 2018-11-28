import { Application } from 'egg';
import {Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class Player extends Model<Player> {
  static app: Application;

  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  num: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
