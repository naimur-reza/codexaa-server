import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TeamService } from './team.service'
import httpStatus from 'http-status'

// Team Banner Controllers
const addTeamBanners = catchAsync(async (req, res) => {
  const files = req.files as Express.Multer.File[]
  const result = await TeamService.createTeamBanner(files)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team banner added successfully',
    data: result
  })
})

const getAllTeamBanner =catchAsync(async(req, res) => {
  const result = await TeamService.getAllTeamBanner()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team banners retreived successfully",
    data: result
  })
})
 

 

const updateTeamBanner = catchAsync(async (req, res) => {
  const { id } = req.params
  const files = req.files as Express.Multer.File[]
  const result = await TeamService.updateTeamBanner(id, files)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team banner updated successfully',
    data: result
  })
})

const deleteTeamBanner = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TeamService.deleteTeamBanner(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team banner deleted successfully',
    data: result
  })
})

// Team Member Controllers
const createTeam = catchAsync(async (req, res) => {
  const data = req.body
  const file = req.file as Express.Multer.File

  console.log("Team Member",data)
  const result = await TeamService.createTeamMember(data, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member added successfully',
    data: result
  })
})

const getAllTeams = catchAsync(async (req, res) => {
  const result = await TeamService.getAllTeams()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team members retrieved successfully',
    data: result
  })
})

const getSingleTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TeamService.getSingleTeam(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member retrieved successfully',
    data: result
  })
})

const updateTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const file = req.file as Express.Multer.File
  const result = await TeamService.updateTeam(data, id, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member updated successfully',
    data: result
  })
})

const deleteTeam = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TeamService.deleteTeam(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member deleted successfully',
    data: result
  })
})

export const TeamController = {
  // Team Banner Controllers
  addTeamBanners,

  getAllTeamBanner,

  updateTeamBanner,
  deleteTeamBanner,
  // Team Member Controllers
  createTeam,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam
}
