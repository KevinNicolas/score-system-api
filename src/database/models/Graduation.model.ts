import { DataTypes } from 'sequelize'
import { database } from '@database'

export const GraduationModel = database.define('graduation', {
  graduation: DataTypes.INTEGER,
  type: DataTypes.STRING
}, {
  tableName: 'graduations',
  timestamps: false
})