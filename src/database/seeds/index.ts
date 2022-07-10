import { seedCombat } from './combat.seed'
import { seedCompetitor } from './competitor.seed'
import { seedCompetitorCombatData } from './competitor-combat-data.seed'
import { seedGraduations } from './graduation.seed'
import { seedKeyInformation } from './key-information.seed'
import { seedRing } from './ring.seed'
import { seedTournamentKey } from './tournament-key.seed'
import { seedTournament } from './tournament.seed'
import { seedUmpireRol } from './umpire-rol.seed'
import { seedUmpire } from './umpire.seed'
import { seedUsers } from './user.seed'

export const seedDatabase = async () => {
  await seedGraduations()
  await seedKeyInformation()
  await seedUmpireRol()
  await seedUsers()
  await seedTournamentKey()
  await seedCompetitor()
  await seedCompetitorCombatData()
  await seedCombat()
  await seedTournament()
  await seedRing()
  await seedUmpire()
}