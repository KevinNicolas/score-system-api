import { CompetitorCombatDataModel } from "@database/models";

export const seedCompetitorCombatData = async () => {
  const competitorsCombatDataInfo = [
    {
      competitor_id: 1
    },
    {
      competitor_id: 2
    }
  ]

  for (const { competitor_id } of competitorsCombatDataInfo) {
    const competitorCombatDataModel = await CompetitorCombatDataModel.create({
      competitor_id
    })

    await competitorCombatDataModel.save()
  }
}