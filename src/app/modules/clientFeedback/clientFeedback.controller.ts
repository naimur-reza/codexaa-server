import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ClientFeedbackService } from './clientFeedback.service'
import httpStatus from 'http-status'

const createClientFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await ClientFeedbackService.createClientFeedbackIntoDB(
    req.body,
    req.file
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Client feedback created successfully',
    data: result
  })
})

const getAllClientFeedbacks = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ClientFeedbackService.getAllClientFeedbacksFromDB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Client feedbacks retrieved successfully',
      data: result
    })
  }
)

const getSingleClientFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await ClientFeedbackService.getSingleClientFeedbackFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Client feedback retrieved successfully',
      data: result
    })
  }
)

const updateClientFeedback = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ClientFeedbackService.updateClientFeedback(
    id,
    req.body,
    req.file
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Client feedback updated successfully',
    data: result
  })
})

const deleteClientFeedback = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ClientFeedbackService.deleteClientFeedbackFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Client feedback deleted successfully',
    data: result
  })
})

export const ClientFeedbackController = {
  createClientFeedback,
  getAllClientFeedbacks,
  getSingleClientFeedback,
  updateClientFeedback,
  deleteClientFeedback
}
