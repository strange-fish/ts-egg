import { Application } from 'egg'
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
  Default,
  HasMany
} from 'sequelize-typescript'
import User from './user'
import Comment from './comment'

@Table
export default class Article extends Model<Article> {
  static app: Application

  @Column({ primaryKey: true, autoIncrement: true })
  id: number

  @Column
  title: string

  @Column(DataType.TEXT)
  content: string

  @Column
  authorId: number

  @BelongsTo(() => User, 'authorId')
  author: User

  @Default(0)
  @Column
  readCount: number

  @HasMany(() => Comment, 'articleId')
  comments?: Comment[]

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
