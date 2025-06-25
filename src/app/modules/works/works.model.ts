import { Schema, model } from 'mongoose'
import { IWorks } from './works.interface'

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
    },
    metaTitle: {
      type: String,
      required: [true, 'Meta title is required'],
      trim: true
    },
    metaDescription: {
      type: String,
      required: [true, 'Meta Descriptionn is required'],
      trim: true
    },
    metaImageAlt: {
      type: String,
      required: [true, 'Meta Image Alt Tag is required'],
      trim: true
    },
    metaTags: {
      type: [String],
      required: [true, 'Meta tags is required'],
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
WorksSchema.index({ client: 1 })
WorksSchema.index({ createdAt: -1 })

export const Works = model<IWorks>('Works', WorksSchema)
