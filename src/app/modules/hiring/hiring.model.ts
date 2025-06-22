import { Schema, model } from 'mongoose'
import { IHiring } from './hiring.interface'

const HiringSchema = new Schema<IHiring>(
  {
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    experience: {
      type: String,
      required: [true, 'Experience is required'],
      trim: true
    },
    requirements: {
      type: String,
      required: [true, 'Requirements are required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true
    },
    workingHours: {
      type: String,
      required: [true, 'Working hours are required'],
      trim: true
    },
    jobNature: {
      type: String,
      required: [true, 'Job nature is required'],
      trim: true
    },
    benefits: {
      type: String,
      required: [true, 'Benefits are required'],
      trim: true
    },
    reponsibilities: {
      type: String,
      required: [true, 'Responsibilities are required'],
      trim: true
    },
    applicationDeadline: {
      type: String,
      required: [true, 'Application deadline is required'],
      trim: true
    },
    skillsRequired: {
      type: [String],
      required: [true, 'Skills are required'],
      validate: {
        validator: function (v: string[]) {
          return v.length > 0
        },
        message: 'At least one skill is required'
      }
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
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
 
  },
   
 
)

// Add indexes for frequently queried fields
HiringSchema.index({ title: 1 })
HiringSchema.index({ category: 1 })
HiringSchema.index({ companyName: 1 })
HiringSchema.index({ createdAt: -1 })

export const Hiring = model<IHiring>('Hiring', HiringSchema)
