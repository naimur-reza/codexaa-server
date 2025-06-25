import { Document, Types } from 'mongoose'

export interface ITeamMember extends Document {
  name: string
  bio: string
  profileImage: string
  socials: {
    facebook?: string
    linkedin?: string
    behance?: string
  }
  description: string
  image: string
  category: string
  team: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}
