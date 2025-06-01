import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ApplicationService } from './application.service'
import httpStatus from 'http-status'

const createApplication = catchAsync(async (req, res) => {
  const data = req.body
  const result = await ApplicationService.createApplicationIntoDB(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application submitted successfully',
    data: result
  })
})

const getAllApplications = catchAsync(async (req, res) => {
  const result = await ApplicationService.getAllApplicationsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Applications retrieved successfully',
    data: result
  })
})

const getSingleApplication = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ApplicationService.getSingleApplicationFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application retrieved successfully',
    data: result
  })
})

const updateApplication = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const result = await ApplicationService.updateApplication(data, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application updated successfully',
    data: result
  })
})

const deleteApplication = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ApplicationService.deleteApplicationFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application deleted successfully',
    data: result
  })
})

const getApplicationsByJobId = catchAsync(async (req, res) => {
  const { jobId } = req.params
  const result = await ApplicationService.getApplicationsByJobId(jobId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Applications retrieved successfully',
    data: result
  })
})

const updateApplicationScore = catchAsync(async (req, res) => {
  const { id } = req.params
  const { score } = req.body
  const result = await ApplicationService.updateApplicationScore(id, score)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application score updated successfully',
    data: result
  })
})

export const ApplicationController = {
  createApplication,
  getAllApplications,
  getSingleApplication,
  updateApplication,
  deleteApplication,
  getApplicationsByJobId,
  updateApplicationScore
}
