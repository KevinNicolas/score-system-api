import { database } from '@database'
import { CompetitorModel } from '@database/models/Competitor.model'
import { CompetitorCombatDataModel } from '@database/models/Competitor-combat-data.model'
import { TournamentKeyModel } from '@database/models/Tournament-key.model'
import { DataTypes } from 'sequelize'

export const CombatModel = database.define(
  'combat',
  {
    blue_competitor_combat_data_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    red_competitor_combat_data_id: DataTypes.INTEGER,
    total_combats_in_tier: DataTypes.INTEGER,
    tournament_key_id: DataTypes.INTEGER,
    winner_id: DataTypes.INTEGER,
  }, {
    tableName: 'combats'
  }
)

CompetitorModel.hasOne(CombatModel, { foreignKey: 'winner_id', as: 'winner' })
CombatModel.belongsTo(CompetitorModel, { foreignKey: 'winner_id', as: 'winner' })

CompetitorCombatDataModel.hasOne(CombatModel, { foreignKey: 'blue_competitor_combat_data_id', as: 'blue_competitor' })
CombatModel.belongsTo(CompetitorCombatDataModel, { foreignKey: 'blue_competitor_combat_data_id', as: 'blue_competitor' })

CompetitorCombatDataModel.hasOne(CombatModel, { foreignKey: 'red_competitor_combat_data_id', as: 'red_competitor' })
CombatModel.belongsTo(CompetitorCombatDataModel, { foreignKey: 'red_competitor_combat_data_id', as: 'red_competitor' })

TournamentKeyModel.hasOne(CombatModel, { foreignKey: 'tournament_key_id' })
CombatModel.belongsTo(TournamentKeyModel, { foreignKey: 'tournament_key_id' })