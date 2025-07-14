import hashPassword from '../../utils/hashPassword'
import { Users } from './user.model'
import { IUser } from './user.validation'

const createUser = async (userData: IUser) => {
  const hashedPassword = hashPassword(userData.password)
  userData.password = hashedPassword
  console.log(userData)
  const user = await Users.create(userData)
  return user
}

const getAllUsers = async () => {
  const users = await Users.find()
  if (!users || users.length === 0) throw new Error('No users found')
  return users
}

const getUserByUsername = async (id: string) => {
  const user = await Users.find({ id })
  if (!user) throw new Error('User not found')
  return user
}

const updateUser = async (id: string, updateData: Partial<IUser>) => {
  const user = await Users.findOneAndUpdate({ _id: id }, updateData, {
    new: true
  })
  if (!user) throw new Error('User not found')
  return user
}

const deleteUser = async (userId: string) => {
  console.log(userId)
  const user = await Users.findByIdAndDelete({ _id: userId })
  if (!user) throw new Error('User not found')
  return { message: 'User deleted successfully' }
}

export const UserService = {
  createUser,
  getAllUsers,
  updateUser,
  getUserByUsername,
  deleteUser
}
