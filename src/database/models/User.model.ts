import { database } from '@database'
import { PersonalInfoModel } from '@database/models'
import { DataTypes } from 'sequelize'

export const UserModel = database.define(
  'user',
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    personal_info_id: DataTypes.INTEGER
  },
  {
    tableName: 'users',
  }
)

PersonalInfoModel.hasOne(UserModel, { foreignKey: 'personal_info_id' })
UserModel.belongsTo(PersonalInfoModel, { foreignKey: 'personal_info_id' })