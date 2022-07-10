import { PersonalInfoModel, GraduationModel } from '@database/models'
import { defineController } from '@utils'

export const FindOneUserPersonalInfo = defineController(async (request, done, error) => {
  try {
    const { dni } = request.params as { dni: number }
    if (isNaN(Number(dni))) throw { status: 400, error: 'The "dni" parameter must be a number' }

    const personalInfo = await PersonalInfoModel.findOne({ where: { dni }, include: { model: GraduationModel }, attributes: { exclude: ['password'] } })
    if (personalInfo) return done({ personalInfo })
    throw { status: 404, error: `Personal information of ID ${dni} not found` }
  } catch (err) {
    error(err)
  }
})
