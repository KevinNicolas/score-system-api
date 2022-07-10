import { database } from '@database'
import { TournamentKeyModel } from '@database/models/Tournament-key.model'
import { TournamentModel } from '@database/models/Tournament.model'
import { DataTypes } from 'sequelize'

export const RingModel = database.define(
  'ring',
  {
    active_key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tournament_id: DataTypes.INTEGER
  }, {
    tableName: 'rings'
  }
)

TournamentModel.hasOne(RingModel, { foreignKey: 'tournament_id' })
RingModel.belongsTo(TournamentModel, { foreignKey: 'tournament_id' })

TournamentKeyModel.hasOne(RingModel, { foreignKey: 'active_key' })
RingModel.belongsTo(TournamentKeyModel, { foreignKey: 'active_key' })