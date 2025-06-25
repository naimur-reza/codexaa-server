import { Schema, model } from 'mongoose'
import { ITeamMember } from './teamMember.interface'

const TeamMemberSchema = new Schema<ITeamMember>(
  {
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
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: [true, 'Team reference is required']
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
TeamMemberSchema.index({ name: 1 })
TeamMemberSchema.index({ category: 1 })
TeamMemberSchema.index({ team: 1 })
TeamMemberSchema.index({ createdAt: -1 })

export const TeamMember = model<ITeamMember>('TeamMember', TeamMemberSchema)
