import { Schema, model } from 'mongoose'
import { ITeamBanner } from './team.interface'

const TeamBannerSchema = new Schema<ITeamBanner>(
  {
    teamBanners: {
      type: [{
        url: String
      }],
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

// Add virtual for team members
TeamBannerSchema.virtual('teamMembers', {
  ref: 'TeamMember',
  localField: '_id',
  foreignField: 'team'
})

// Add indexes for frequently queried fields
TeamBannerSchema.index({ 'teams.name': 1 })
TeamBannerSchema.index({ 'teams.category': 1 })
TeamBannerSchema.index({ createdAt: -1 })

export const Team = model<ITeamBanner>('Team', TeamBannerSchema)
