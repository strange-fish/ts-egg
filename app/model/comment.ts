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
  AutoIncrement,
  Default
} from 'sequelize-typescript'
import User from './user'
import Article from './article'

@Table
export default class Comment extends Model<Comment> {
  static app: Application

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column(DataType.TEXT)
  content: string

  @Column
  authorId: number

  @BelongsTo(() => User, 'authorId')
  author: User

  @Column
  articleId: number

  @BelongsTo(() => Article, 'articleId')
  article: Article

  @Default(0)
  @Column
  readCount: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
