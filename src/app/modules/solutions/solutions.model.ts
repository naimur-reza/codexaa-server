import { Schema, model } from 'mongoose'
import { ISolution } from './solutions.interface'

const SolutionsSchema = new Schema<ISolution>(
  {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    features: {
      type: [String],
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Solutions = model<ISolution>('Solutions', SolutionsSchema)
