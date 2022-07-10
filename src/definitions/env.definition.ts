import { Dialect } from 'sequelize/types'

export type EnvValuesTypeMap = {
  PORT: number | undefined
  DB_DATABASE: string
  DB_DIALECT: Dialect | undefined
  DB_HOST: string
  DB_USER: string
  DB_PASSWORD: string
  DB_PORT: number | undefined
}

export type EnvValue<K extends keyof EnvValuesTypeMap> = K
