import { EnvValue, EnvValuesTypeMap } from '@definitions'
import { Logger } from '@utils'

export const getEnvValue = <K extends keyof EnvValuesTypeMap>(envValueKey: EnvValue<K>): EnvValuesTypeMap[K] => {
  if (!process.env[envValueKey]) Logger.devWarn('env-utils', 'Key', envValueKey, 'is false/null/undefined')
  const envValue: EnvValuesTypeMap[K] = process.env[envValueKey] as EnvValuesTypeMap[K]
  return envValue
}

export const validateEnvValues = () => {
  try {
    const { DB_DATABASE: database, DB_DIALECT: dialect, DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_PORT: port } = process.env as EnvValuesTypeMap
    const errorMessage = 'is missing in .env file'

    if (!database) throw { error: ['DB_DATABASE', errorMessage] }
    if (!dialect) throw { error: ['DB_DIALECT', errorMessage] }
    if (!host) throw { error: ['DB_HOST', errorMessage] }
    if (!user) throw { error: ['DB_USER', errorMessage] }
    if (!password) throw { error: ['DB_PASSWORD', errorMessage] }
    if (!port && isNaN(Number(port))) throw { error: 'DB_PORT need to be a number' }
  } catch (err: unknown) {
    const { error } = err as { error: string }
    if (error) return Logger.error('Env-validation', error)
    Logger.devError('Env-validation', err)
  }
}
