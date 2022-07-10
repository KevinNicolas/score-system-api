import { KeyInformationModel } from '@database/models'

export const seedKeyInformation = async () => {
  const graduationModel = await KeyInformationModel.create({
    end_age: 10,
    end_graduation_id: 2,
    end_weight: 50.48,
    start_age: 8,
    start_gaduation_id: 1,
    start_weight: 40.24,
  })

  await graduationModel.save()
}