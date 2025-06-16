import { Schema, model } from 'mongoose'
import { IService } from './service.interface'

const ServicesSchema = new Schema<IService>(
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
        validator: function (v: string[]) {
          return v.length > 0
        },
        message: 'At least one feature is required'
      }
    },
    metaTitle: {
      type: String,
      required: [true, "Meta title is required"],
      trim: true
    },
    metaDescription: {
      type: String,
      required: [true, "Meta Descriptionn is required"],
      trim: true
    },
    metaImageAlt: {
      type: String,
      required: [true, "Meta Image Alt Tag is required"],
      trim: true
    },
    metaTags: {
      type: [String],
      required: [true, "Meta tags is required"],
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
ServicesSchema.index({ title: 1 })
ServicesSchema.index({ createdAt: -1 })

export const Services = model<IService>('Services', ServicesSchema)
