import { Schema, model } from 'mongoose'
import { IApplication } from './application.interface'

const ApplicationSchema = new Schema<IApplication>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    jobId: {
      type: String,
      required: [true, 'Job ID is required'],
      trim: true
    },
    applicationId: {
      type: String,
      required: [true, 'Application ID is required'],
      trim: true
    },
    resumeDriveLink: {
      type: String,
      required: [true, 'Resume link score is required'],
      trim: true
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
      currentCompany: {
        type: String,
        required: [true, 'Current company is required'],
        trim: true
      },
      expectedSalary: {
        type: String,
        required: [true, 'Expected salary is required'],
        trim: true
      },
      availableFrom: {
        type: String,
        required: [true, 'Available from date is required'],
        trim: true
      }
    },
    education: {
      institution: {
        type: String,
        required: [true, 'Institution is required'],
        trim: true
      },
      skills: {
        type: [String],
        required: [true, 'Skills are required'],
        validate: {
          validator: function (v: string[]) {
            return v.length > 0
          },
          message: 'At least one skill is required'
        }
      }
    },
    workExperience: {
      type: String,
      required: [true, 'Work experience is required'],
      trim: true
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
