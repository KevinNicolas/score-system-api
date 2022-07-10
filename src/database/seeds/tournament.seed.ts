import { TournamentModel } from '@database/models'

export const seedTournament = async () => {
  const tournament = await TournamentModel.create({
    name: 'IX Torneo de tkd',
    start_date: new Date(),
    end_date: new Date(),
    organizer_id: 1
  })

  tournament.save()
}