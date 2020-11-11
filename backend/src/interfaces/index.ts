// Types
import { App, User } from './types'

// Sequelize
export interface iDataTypes {
  UUID: string
  UUIDV4(): string
  STRING: string
  BOOLEAN: boolean
  TEXT: string
  INTEGER: number
  DATE: string
  FLOAT: number
}

// App
export interface iApp extends App {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface iCreateAppInput extends App {}

// User
export interface iUser extends User {
  id: string
  token: string
  createdAt: Date
  updatedAd: Date
}

export interface iCreateUserInput extends User {}

// Models
export interface iModels {
  App: any
  User: any
  sequelize: any
}
