import { Application } from 'egg';
import {BelongsTo, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class Category extends Model<Category> {
  static app: Application;

  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  level: number;

  @Column
  parentId: number;

  @BelongsTo(() => Category, 'parentId')
  parentCategory: Category;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
