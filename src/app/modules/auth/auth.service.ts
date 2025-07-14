import { userRole } from '../../constant/userRole'
import { generateAccessToken } from '../../utils/generateToken'

import bcrypt from 'bcrypt'
import { Users } from '../users/user.model'
import GenericError from '../../errors/GenericError'

const login = async (username: string, password: string) => {
  const user = await Users.findOne({ username })

  if (user?.status === 'inactive') {
    throw new GenericError(403, 'User is inactive')
  }

  if (!user) throw new GenericError(401, 'Invalid credentials')
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new GenericError(401, 'Invalid credentials')
  const userObj = user.toObject()
  delete (userObj as { password?: string }).password
  const token = generateAccessToken(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!
  )
  return {
    user: userObj,
    token
  }
}

const changePassword = async (
  adminId: string,
  oldPassword: string,
  newPassword: string
) => {
  const admin = await Users.findById(adminId)

  if (!admin) throw new Error('Admin not found')
  const isMatch = await bcrypt.compare(oldPassword, admin.password)
  if (!isMatch) throw new Error('Old password is incorrect')
  const hashed = await bcrypt.hash(newPassword, 10)
  admin.password = hashed
  await admin.save()
  return { message: 'Password changed successfully' }
}

export const AuthService = {
  login,
  changePassword
}
