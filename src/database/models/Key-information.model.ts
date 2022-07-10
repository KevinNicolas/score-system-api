import { database } from '@database'
import { GraduationModel } from '@database/models/Graduation.model'
import { DataTypes } from 'sequelize'

export const KeyInformationModel = database.define(
  'key_information',
  {
    end_age: DataTypes.INTEGER,
    end_graduation_id: DataTypes.INTEGER,
    end_weight: DataTypes.FLOAT,
    start_age: DataTypes.INTEGER,
    start_gaduation_id: DataTypes.INTEGER,
    start_weight: DataTypes.FLOAT,
  }, {
    tableName: 'key_information'
  }
)

GraduationModel.hasOne(KeyInformationModel, { foreignKey: 'end_graduation_id', as: 'final_graduation' })
KeyInformationModel.belongsTo(GraduationModel, { foreignKey: 'end_graduation_id', as: 'final_graduation' })

GraduationModel.hasOne(KeyInformationModel, { foreignKey: 'start_gaduation_id', as: 'initial_graduation' })
KeyInformationModel.belongsTo(GraduationModel, { foreignKey: 'start_gaduation_id', as: 'initial_graduation' })