import { GraduationModel } from '@database/models'

export const seedGraduations = async () => {
  const graduations = await GraduationModel.bulkCreate([
    {
      graduation: 10,
      type: 'GUP'
    },
    {
      graduation: 9,
      type: 'GUP'
    },
    {
      graduation: 8,
      type: 'GUP'
    },
    {
      graduation: 7,
      type: 'GUP'
    },
    {
      graduation: 6,
      type: 'GUP'
    },
    {
      graduation: 5,
      type: 'GUP'
    },
    {
      graduation: 4,
      type: 'GUP'
    },
    {
      graduation: 3,
      type: 'GUP'
    },
    {
      graduation: 2,
      type: 'GUP'
    },
    {
      graduation: 1,
      type: 'GUP'
    },
    {
      graduation: 1,
      type: 'DAN'
    },
    {
      graduation: 2,
      type: 'DAN'
    },
    {
      graduation: 3,
      type: 'DAN'
    },
    {
      graduation: 4,
      type: 'DAN'
    },
    {
      graduation: 5,
      type: 'DAN'
    },
    {
      graduation: 6,
      type: 'DAN'
    },
    {
      graduation: 7,
      type: 'DAN'
    },
    {
      graduation: 8,
      type: 'DAN'
    },
    {
      graduation: 9,
      type: 'DAN'
    },
  ])

  for (const graduation of graduations) {
    await graduation.save()
  }
}