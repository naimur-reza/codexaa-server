import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { HiringService } from './hiring.service'
import httpStatus from 'http-status'

const createHiring = catchAsync(async (req, res) => {
  const data = req.body
  const result = await HiringService.createHiringIntoDB(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job posting created successfully',
    data: result
  })
})

const getAllHirings = catchAsync(async (req, res) => {
  const result = await HiringService.getAllHiringsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job postings retrieved successfully',
    data: result
  })
})

const getSingleHiring = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await HiringService.getSingleHiringFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job posting retrieved successfully',
    data: result
  })
})

const updateHiring = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const result = await HiringService.updateHiring(data, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job posting updated successfully',
    data: result
  })
})

const deleteHiring = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await HiringService.deleteHiringFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job posting deleted successfully',
    data: result
  })
})

const getHiringsByCategory = catchAsync(async (req, res) => {
  const { category } = req.params
  const result = await HiringService.getHiringsByCategory(category)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job postings retrieved successfully',
    data: result
  })
})

export const HiringController = {
  createHiring,
  getAllHirings,
  getSingleHiring,
  updateHiring,
  deleteHiring,
  getHiringsByCategory
}
