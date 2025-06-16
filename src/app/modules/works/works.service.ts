import { IWorks } from './works.interface'
import { Works } from './works.model'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { UploadApiResponse } from 'cloudinary'

const createWorkIntoDB = async (payload: IWorks, file?: Express.Multer.File): Promise<IWorks> => {
  if (file) {
    const result = await sendImageToCloudinary(file.filename, file.path) as UploadApiResponse
    payload.image = result.secure_url
  }
  const result = await Works.create(payload)
  return result
}

const getAllWorksFromDB = async (): Promise<IWorks[]> => {
  const result = await Works.find()
  return result
}

const getSingleWorkFromDB = async (id: string): Promise<IWorks | null> => {
  const result = await Works.findById(id)
  return result
}

const deleteWorkFromDB = async (id: string): Promise<IWorks | null> => {
  const result = await Works.findByIdAndDelete(id)
  return result
}

const updateWork = async (
  id: string,
  payload: Partial<IWorks>,
  file?: Express.Multer.File
): Promise<IWorks | null> => {
  if (file) {
    const result = await sendImageToCloudinary(file.filename, file.path) as UploadApiResponse
    payload.image = result.secure_url
  }
  const result = await Works.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  })
  return result
}

const getWorksByCategory = async (category: string): Promise<IWorks[]> => {
  const result = await Works.find({ category })
  return result
}

export const WorksService = {
  createWorkIntoDB,
  getAllWorksFromDB,
  getSingleWorkFromDB,
  deleteWorkFromDB,
  updateWork,
  getWorksByCategory
}
