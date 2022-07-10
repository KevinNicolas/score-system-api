import { CompetitorModel } from '@database/models/Competitor.model'

export const seedCompetitor = async () => {
  const competitorsInfo = [
    {
      tournament_key_id: 1,
      personal_info_id: 42790366,
      weight: 78.200,
    },
    {
      tournament_key_id: 1,
      personal_info_id: 12345678,
      weight: 77.3,
    }
  ]

  for (const { personal_info_id, tournament_key_id, weight } of competitorsInfo) {
    const competitorModel = await CompetitorModel.create({
      tournament_key_id,
      personal_info_id,
      weight,
    })

    await competitorModel.save()
  }
}