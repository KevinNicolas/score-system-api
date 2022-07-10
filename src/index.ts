import 'dotenv/config'
import { database } from '@database'
import { seedDatabase } from '@database/seeds'
import { validateEnvValues } from '@utils'
import { app } from './app'
import {} from '@database/models'

;(async () => {
  try {
    validateEnvValues()

    await database.authenticate()
    await database.sync({ force: true })
    await seedDatabase()
    app()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
