import { Application } from 'egg'
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  AutoIncrement
} from 'sequelize-typescript'
import User from './user'

@Table
export default class Article extends Model<Article> {
  static app: Application

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  title: string

  @Column(DataType.TEXT)
  content: string

  @Column
  authorId: number

  @BelongsTo(() => User, 'authorId')
  author: User

  @Column
  readCount: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}