import { IClientFeedback } from './clientFeedback.interface'
import { ClientFeedback } from './clientFeedback.model'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { UploadApiResponse } from 'cloudinary'

const createClientFeedbackIntoDB = async (
  payload: IClientFeedback,
  file?: Express.Multer.File
): Promise<IClientFeedback> => {
  if (file) {
    const result = (await sendImageToCloudinary(
      file.filename,
      file.path
    )) as UploadApiResponse
    payload.image = result.secure_url
  }
  const result = await ClientFeedback.create(payload)
  return result
}

const getAllClientFeedbacksFromDB = async (): Promise<IClientFeedback[]> => {
  const result = await ClientFeedback.find()
  return result
}

const getSingleClientFeedbackFromDB = async (
  id: string
): Promise<IClientFeedback | null> => {
  const result = await ClientFeedback.findById(id)
  return result
}

const deleteClientFeedbackFromDB = async (
  id: string
): Promise<IClientFeedback | null> => {
  const result = await ClientFeedback.findByIdAndDelete(id)
  return result
}

const updateClientFeedback = async (
  id: string,
  payload: Partial<IClientFeedback>,
  file?: Express.Multer.File
): Promise<IClientFeedback | null> => {
  console.log('Frooooooooooooooooooooooooom Fileeeeeeeeeee', file)
  if (file) {
    const result = (await sendImageToCloudinary(
      file.filename,
      file.path
    )) as UploadApiResponse
    payload.image = result.secure_url
  }
  const result = await ClientFeedback.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  })
  return result
}

export const ClientFeedbackService = {
  createClientFeedbackIntoDB,
  getAllClientFeedbacksFromDB,
  getSingleClientFeedbackFromDB,
  deleteClientFeedbackFromDB,
  updateClientFeedback
}
