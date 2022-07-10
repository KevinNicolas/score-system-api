import { database } from "@database";
import { CompetitorModel } from '@database/models/Competitor.model'
import { DataTypes } from "sequelize";

export const CompetitorCombatDataModel = database.define(
  'competitor_combat_data',
  {
    competitor_id: DataTypes.INTEGER,
    disqualified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    points_less: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    warnings: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'competitors-combat-data'
  }
)

CompetitorModel.hasOne(CompetitorCombatDataModel, { foreignKey: 'competitor_id' })
CompetitorCombatDataModel.belongsTo(CompetitorModel, { foreignKey: 'competitor_id' })