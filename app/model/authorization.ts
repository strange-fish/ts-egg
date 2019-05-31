import {
  Column,
  CreatedAt,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export default class Authorization extends Model<Authorization> {
  @Column
  userId: number;

  @Default('local')
  @Column
  provider: string;

  @PrimaryKey
  @Column(DataType.UUID)
  @Default(DataType.UUIDV1)
  token: string;

  @CreatedAt
  createAt: Date;

  @UpdatedAt
  updateAt: Date;
}
