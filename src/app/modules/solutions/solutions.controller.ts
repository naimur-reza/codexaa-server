import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SolutionsService } from './solutions.service'
import httpStatus from 'http-status'

const createSolution = catchAsync(async (req, res) => {
  const data = req.body
  const file = req.file
  const result = await SolutionsService.createSolutionIntoDB(data, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Solution created successfully',
    data: result
  })
})

const getAllSolutions = catchAsync(async (req, res) => {
  const result = await SolutionsService.getAllSolutionsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Solutions retrieved successfully',
    data: result
  })
})

const getSingleSolution = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SolutionsService.getSingleSolutionFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Solution retrieved successfully',
    data: result
  })
})

const updateSolution = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const file = req.file
  const result = await SolutionsService.updateSolution(data, id, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Solution updated successfully',
    data: result
  })
})

const deleteSolution = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SolutionsService.deleteSolutionFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Solution deleted successfully',
    data: result
  })
})

export const SolutionsController = {
  createSolution,
  getAllSolutions,
  getSingleSolution,
  updateSolution,
  deleteSolution
}
