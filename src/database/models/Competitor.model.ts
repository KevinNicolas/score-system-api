import { database } from '@database'
import { PersonalInfoModel } from '@database/models/Personal-information.model'
import { TournamentKeyModel } from '@database/models/Tournament-key.model'
import { DataTypes } from 'sequelize'

export const CompetitorModel = database.define(
  'competitor',
  {
    personal_info_id: DataTypes.INTEGER,
    tournament_key_id: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
  }, {
    tableName: 'competitors'
  }
)

PersonalInfoModel.hasOne(CompetitorModel, { foreignKey: 'personal_info_id' })
CompetitorModel.belongsTo(PersonalInfoModel, { foreignKey: 'personal_info_id' })

TournamentKeyModel.hasOne(CompetitorModel, { foreignKey: 'tournament_key_id' })
CompetitorModel.belongsTo(TournamentKeyModel, { foreignKey: 'tournament_key_id' })
