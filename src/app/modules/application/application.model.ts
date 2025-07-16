import mongoose, { Schema, model } from 'mongoose'
import { IApplication } from './application.interface'

const ApplicationSchema = new Schema<IApplication>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    resume: {
      type: String,
      required: [true, 'Resume is required']
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hiring'
    },
    contactInformation: {
      type: String,
      required: [true, 'Contact information is required'],
      trim: true
    },
    onlineProfiles: {
      linkedin: {
        type: String,
        required: [true, 'LinkedIn profile is required'],
        trim: true
      },
      github: {
        type: String,
        required: [true, 'GitHub profile is required'],
        trim: true
      },
      portfolio: {
        type: String,
        required: [true, 'Portfolio is required'],
        trim: true
      }
    },
    employeeDetails: {
      availableFrom: {
        type: String,
        required: [true, 'Available from date is required'],
        trim: true
      }
    },
    whyShouldHire: {
      type: String,
      required: [true, 'Why should hire is required'],
      trim: true
    },
    coverLetter: {
      type: String,
      required: [true, 'Cover letter is required'],
      trim: true
    },
    applicationDetails: {
      type: String,
      required: [true, 'Application details are required'],
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
ApplicationSchema.index({ jobId: 1 })
ApplicationSchema.index({ applicationId: 1 })
ApplicationSchema.index({ name: 1 })
ApplicationSchema.index({ createdAt: -1 })

export const Application = model<IApplication>('Application', ApplicationSchema)
