import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { WorksService } from './works.service'
import httpStatus from 'http-status'

const createWork = catchAsync(async (req: Request, res: Response) => {
  const result = await WorksService.createWorkIntoDB(req.body, req.file)


  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work created successfully',
    data: result
  })
})

const getAllWorks = catchAsync(async (req: Request, res: Response) => {
  const result = await WorksService.getAllWorksFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Works retrieved successfully',
    data: result
  })
})

const getSingleWork = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await WorksService.getSingleWorkFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work retrieved successfully',
    data: result
  })
})

const updateWork = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await WorksService.updateWork(id, req.body, req.file)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work updated successfully',
    data: result
  })
})

const deleteWork = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await WorksService.deleteWorkFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Work deleted successfully',
    data: result
  })
})

const getWorksByCategory = catchAsync(async (req: Request, res: Response) => {
  const { category } = req.params
  const result = await WorksService.getWorksByCategory(category)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Works retrieved successfully',
    data: result
  })
})

export const WorksController = {
  createWork,
  getAllWorks,
  getSingleWork,
  updateWork,
  deleteWork,
  getWorksByCategory
}
