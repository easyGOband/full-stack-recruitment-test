import mongoose from 'mongoose'
import { settings } from '@config/settings'

export const mongo = mongoose
  .connect(settings.DB.URI!)
  .then((db) => console.log('Mongo is online...'))
  .catch((error) => console.error(error))
