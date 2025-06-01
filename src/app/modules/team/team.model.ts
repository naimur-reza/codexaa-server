import { Schema, model } from 'mongoose'
import { ITeam } from './team.interface'

const TeamSchema = new Schema<ITeam>(
  {
    teamBanner: {
      type: String,
      required: [true, 'Team banner is required']
    },
    teams: [{
      name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
      },
      bio: {
        type: String,
        required: [true, 'Bio is required'],
        trim: true
      },
      profileImage: {
        type: String,
        required: [true, 'Profile image is required']
      },
      socials: {
        facebook: String,
        linkedin: String,
        behance: String
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
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
    }]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

// Add indexes for frequently queried fields
TeamSchema.index({ 'teams.name': 1 })
TeamSchema.index({ 'teams.category': 1 })
TeamSchema.index({ createdAt: -1 })

export const Team = model<ITeam>('Team', TeamSchema) 