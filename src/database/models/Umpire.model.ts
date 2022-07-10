import { database } from '@database'
import { PersonalInfoModel } from '@database/models/Personal-information.model'
import { RingModel } from '@database/models/Ring.model'
import { UmpireRolModel } from '@database/models/Umpire-rol.model'
import { DataTypes } from 'sequelize'

export const UmpireModel = database.define(
  'umpire',
  {
    active_umpire_rol_id: DataTypes.INTEGER,
    assigned_ring_id: DataTypes.INTEGER,
    personal_info_id: DataTypes.INTEGER
  },
  {
    tableName: 'umpires'
  }
)

UmpireRolModel.hasOne(UmpireModel, { foreignKey: 'active_umpire_rol_id' })
UmpireModel.belongsTo(UmpireRolModel, { foreignKey: 'active_umpire_rol_id' })

RingModel.hasOne(UmpireModel, { foreignKey: 'assigned_ring_id' })
UmpireModel.belongsTo(RingModel, { foreignKey: 'assigned_ring_id' })

PersonalInfoModel.hasOne(UmpireModel, { foreignKey: 'personal_info_id' })
UmpireModel.belongsTo(PersonalInfoModel, { foreignKey: 'personal_info_id' })