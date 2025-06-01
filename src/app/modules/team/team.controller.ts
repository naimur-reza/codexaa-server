import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TeamService } from './team.service'
import httpStatus from 'http-status'

const createTeam = catchAsync(async (req, res) => {
  const data = req.body
  const file = req.file
  const result = await TeamService.createTeamIntoDB(data, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team created successfully',
    data: result
  })
})

const getAllTeams = catchAsync(async (req, res) => {
  const result = await TeamService.getAllTeamsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teams retrieved successfully',
    data: result
  })
})

const getSingleTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TeamService.getSingleTeamFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team retrieved successfully',
    data: result
  })
})

const updateTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const file = req.file
  const result = await TeamService.updateTeam(data, id, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team updated successfully',
    data: result
  })
})

const deleteTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TeamService.deleteTeamFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team deleted successfully',
    data: result
  })
})

export const TeamController = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam
}
