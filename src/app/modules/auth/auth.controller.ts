import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { AuthService } from './auth.service'

const login = catchAsync(async (req, res) => {
  const { username, password } = req.body
  const result = await AuthService.login(username, password)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: result
  })
})

const changePassword = catchAsync(async (req, res) => {
  const { adminId, oldPassword, newPassword } = req.body
  const result = await AuthService.changePassword(adminId, oldPassword, newPassword)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password changed successfully',
    data: result
  })
})

export const AuthController = {
  login,
  changePassword
} 