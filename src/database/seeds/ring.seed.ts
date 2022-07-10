import { RingModel } from '@database/models'

export const seedRing = async () => {
  const ring = await RingModel.create({
    active_key: 1,
    name: 'Ring principal',
    tournament_id: 1
  })

  await ring.save()
}