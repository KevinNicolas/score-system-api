import { database } from '@database'
import { KeyInformationModel } from '@database/models/Key-information.model'
import { DataTypes } from 'sequelize'

export const TournamentKeyModel = database.define(
  'tournament_key',
  {
    key_info_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    tableName: 'tournament-keys'
  }
)

KeyInformationModel.hasOne(TournamentKeyModel, { foreignKey: 'key_info_id' })
TournamentKeyModel.belongsTo(KeyInformationModel, { foreignKey: 'key_info_id' })