import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserService } from './user.service'

const createUser = catchAsync(async (req, res) => {
  const userData = req.body
  const user = await UserService.createUser(userData)
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User created successfully',
    data: user
  })
})

const getUserByUsername = catchAsync(async (req, res) => {
  const { id } = req.params
  const user = await UserService.getUserByUsername(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User retrieved successfully',
    data: user
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserService.getAllUsers()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Users retrieved successfully',
    data: users
  })
})

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  const user = await UserService.updateUser(id, updateData)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User updated successfully',
    data: user
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params
  await UserService.deleteUser(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User deleted successfully',
    data: null
  })
})

export const UserController = {
  createUser,
  getAllUsers,
  updateUser,
  getUserByUsername,
  deleteUser
}
