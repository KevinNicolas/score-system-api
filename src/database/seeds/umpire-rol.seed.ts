import { UmpireRolModel } from '@database/models'

export const seedUmpireRol = async () => {
  const umpireRoles = await UmpireRolModel.bulkCreate([
    {
      name: 'JuezDeEsquina'
    },
    {
      name: 'JuezCentral'
    },
    {
      name: 'AsistenteDeComputacion'
    },
    {
      name: 'Presidente'
    },
    {
      name: 'MiembroDelJurado'
    }
  ])

  for (const umpireRol of umpireRoles) {
    await umpireRol.save()
  }
}