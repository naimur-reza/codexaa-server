import { Schema, model } from 'mongoose'
import { IService } from './service.interface'

const ServicesSchema = new Schema<IService>(
  {
    tite: {
      type: String,
 
    },
    subtitle: {
      type: String
    },
    image: {
      type: String
    },
    features: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
)

export const Services = model<IService>('Services', ServicesSchema)
