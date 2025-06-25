import { Schema, model } from 'mongoose'

import bcrypt from 'bcrypt'
import { ISuperAdmin } from './auth.interface'

const SuperAdminSchema = new Schema<ISuperAdmin>(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  },
  {
    timestamps: true
  }
)

SuperAdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

export const SuperAdmin = model<ISuperAdmin>('SuperAdmin', SuperAdminSchema)
