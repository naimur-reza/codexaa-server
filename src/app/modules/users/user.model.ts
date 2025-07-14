import { model, Schema } from 'mongoose'
import { IUser } from './user.validation'

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['admin', 'moderator'],
    default: 'moderator'
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
})

export const Users = model<IUser>('Users', UserSchema)
