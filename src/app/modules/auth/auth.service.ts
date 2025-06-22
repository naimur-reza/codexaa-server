import { SuperAdmin } from './auth.model'
import bcrypt from 'bcrypt'

 

const login = async (username: string, password: string) => {
  const admin = await SuperAdmin.findOne({ username })
  if (!admin) throw new Error('Invalid credentials')
  const isMatch = await bcrypt.compare(password, admin.password)
  if (!isMatch) throw new Error('Invalid credentials')
    const adminObj = admin.toObject()
    delete (adminObj as { password?: string }).password
    return adminObj
}

const changePassword = async (adminId: string, oldPassword: string, newPassword: string) => {
  const admin = await SuperAdmin.findById(adminId)
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