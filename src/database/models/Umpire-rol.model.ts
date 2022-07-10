import { database } from '@database'
import { DataTypes } from 'sequelize'

export const UmpireRolModel = database.define(
  'umpire_rol',
  {
    name: DataTypes.STRING
  },
  {
    tableName: 'umpire-roles',
    timestamps: false
  }
)