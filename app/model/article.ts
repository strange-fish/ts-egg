import { Application } from 'egg';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import User from './user';

@Table({
  timestamps: true,
})
export default class Article extends Model<Article> {
  static app: Application;

  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column(DataType.TEXT)
  content: string;

  @Column
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @Column
  readCount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
