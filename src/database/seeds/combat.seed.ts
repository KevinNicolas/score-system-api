import { CombatModel } from '@database/models'

export const seedCombat = async () => {
  const combatModel = await CombatModel.create({
    blue_competitor_combat_data_id: 1,
    order: 1,
    red_competitor_combat_data_id: 2,
    total_combats_in_tier: 2,
    tournament_key_id: 1,
    winner_id: 1,
  })

  combatModel.save()
}