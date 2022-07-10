import { TournamentKeyModel } from '@database/models'

export const seedTournamentKey = async () => {
  const tournamentKeyModel = await TournamentKeyModel.create({
    key_info_id: 1,
    number: 1
  })

  await tournamentKeyModel.save()
}