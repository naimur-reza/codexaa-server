import { Schema, model } from 'mongoose'
import { ISolution } from './solutions.interface'

const SolutionsSchema = new Schema<ISolution>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'Image is required']
    },
    features: {
      type: [String],
      required: [true, 'Features are required'],
      validate: {
        validator: function(v: string[]) {
          return v.length > 0
        },
        message: 'At least one feature is required'
      }
    },
    buttonTitle: {
      type: String,
      required: [true, 'Button title is required'],
      trim: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

// Add indexes for frequently queried fields
SolutionsSchema.index({ title: 1 })
SolutionsSchema.index({ createdAt: -1 })

export const Solutions = model<ISolution>('Solutions', SolutionsSchema)
