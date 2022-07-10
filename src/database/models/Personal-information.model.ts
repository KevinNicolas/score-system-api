import { database } from '@database'
import { GraduationModel } from '@database/models/Graduation.model'
import { DataTypes } from 'sequelize'

export const PersonalInfoModel = database.define(
  'personal_info',
  {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    birthdate: DataTypes.DATE,
    country: DataTypes.STRING,
    first_name: DataTypes.STRING,
    graduation_id: DataTypes.INTEGER,
    last_name: DataTypes.STRING,
  },
  {
    tableName: 'personal-info',
  }
)

GraduationModel.hasOne(PersonalInfoModel, { foreignKey: 'graduation_id' })
PersonalInfoModel.belongsTo(GraduationModel, { foreignKey: 'graduation_id' })