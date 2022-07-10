import { UserModel, PersonalInfoModel } from '@database/models'

export const seedUsers = async () => {
  const users = [
    {
      personalInfo: {
        dni: 42790366,
        birthdate: new Date(2000, 11, 20),
        country: 'ARGENTINA',
        first_name: 'Kevin Nicolas',
        graduation_id: 11,
        last_name: 'Leguiza Gaggero',
      },
      user: {
        email: 'nicolaskevinleguiza@gmail.com',
        password: '1234',
      }
    },
    {
      personalInfo: {
        dni: 12345678,
        birthdate: new Date(2001, 1, 5),
        country: 'PARAGUAY',
        first_name: 'Ramiro Lautaro',
        graduation_id: 12,
        last_name: 'Perez',
      },
      user: {
        email: 'ramiroLautaro@gmail.com',
        password: '54321',
      }
    }
  ]

  for (const userInfo of users) {
    const { birthdate, country, dni, first_name, graduation_id, last_name } = userInfo.personalInfo

    const personalInfo = await PersonalInfoModel.create({
      dni,
      birthdate,
      country,
      first_name,
      graduation_id,
      last_name,
    })

    const { email, password } = userInfo.user

    const user = await UserModel.create({
      email,
      password,
      personal_info_id: personalInfo.getDataValue('dni'),
    })

    await personalInfo.save()
    await user.save()
  }

  // const personalInfo = await PersonalInfoModel.create({
  //   dni: 42790366,
  //   birthdate: new Date(2000, 11, 20),
  //   country: 'ARGENTINA',
  //   first_name: 'Kevin Nicolas',
  //   graduation_id: 11,
  //   last_name: 'Leguiza Gaggero',
  // })

  // const user = await UserModel.create({
  //   email: 'nicolaskevinleguiza@gmail.com',
  //   password: '1234',
  //   personal_info_id: personalInfo.getDataValue('dni'),
  // })
  // await personalInfo.save()
  // await user.save()
}