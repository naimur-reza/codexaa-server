import { Schema, model } from 'mongoose'
import { IWorks, IWorkDetails } from './works.interface'

const WorkDetailsSchema = new Schema<IWorkDetails>(
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
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      trim: true
    },
    client: {
      type: String,
      required: [true, 'Client is required'],
      trim: true
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
      trim: true
    },
    team: {
      type: String,
      required: [true, 'Team is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    challange: {
      type: String,
      required: [true, 'Challenge is required'],
      trim: true
    },
    solutions: {
      type: String,
      required: [true, 'Solutions are required'],
      trim: true
    },
    technologies: {
      type: String,
      required: [true, 'Technologies are required'],
      trim: true
    },
    liveLink: {
      type: String,
      required: [true, 'Live link is required'],
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

const WorksSchema = new Schema<IWorks>(
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
    category: {
      type: String,
      required: [true, 'Category is required'],
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
WorksSchema.index({ title: 1 })
WorksSchema.index({ category: 1 })
WorksSchema.index({ createdAt: -1 })

WorkDetailsSchema.index({ title: 1 })
WorkDetailsSchema.index({ category: 1 })
WorkDetailsSchema.index({ client: 1 })
WorkDetailsSchema.index({ createdAt: -1 })

export const Works = model<IWorks>('Works', WorksSchema)
export const WorkDetails = model<IWorkDetails>('WorkDetails', WorkDetailsSchema)
