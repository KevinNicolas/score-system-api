import { UmpireModel } from '@database/models'

export const seedUmpire = async () => {
  const umpire = await UmpireModel.create({
    active_umpire_rol_id: 1,
    assigned_ring_id: 1,
    personal_info_id: 42790366
  })

  await umpire.save()
}