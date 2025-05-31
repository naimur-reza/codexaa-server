import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { OurServices } from './services.service'
import httpStatus from 'http-status'

const createService = catchAsync(async (req, res) => {
  const data = req.body
  const file = req.file
  const result = await OurServices.createServiceIntoDB(data, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result
  })
})

const getAllServices = catchAsync(async (req, res) => {
  const result = await OurServices.getAllServicesFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved successfully',
    data: result
  })
})

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await OurServices.getSingleIdFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully',
    data: result
  })
})

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const file = req.file
  const result = await OurServices.updateService(data, id, file)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: result
  })
})

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await OurServices.deleteServiceFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result
  })
})

export const ServicesController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService
}
