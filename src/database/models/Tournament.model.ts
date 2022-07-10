import { database } from '@database'
import { UserModel } from '@database/models/User.model'
import { DataTypes } from 'sequelize'

export const TournamentModel = database.define(
  'tournament',
  {
    end_date: DataTypes.DATE,
    name: DataTypes.STRING,
    organizer_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE
  }, {
    tableName: 'tournaments'
  }
)

UserModel.hasOne(TournamentModel, { foreignKey: 'organizer_id' })
TournamentModel.belongsTo(UserModel, { foreignKey: 'organizer_id' })