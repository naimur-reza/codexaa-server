import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { IService } from './service.interface'
import { Services } from './services.model'

interface MulterFile {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}

const createServiceIntoDB = async (data: IService, file: MulterFile | undefined) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }

  console.log(data)
  const res = await Services.create(data)
  return res
}

const getAllServicesFromDB = async () => {
  const res = await Services.find()
  return res
}

const getSingleIdFromDB = async (serviceId: string) => {
  const res = await Services.findById({ _id: serviceId })
  return res
}

const deleteServiceFromDB = async (serviceId: string) => {
  const res = await Services.deleteOne({ _id: serviceId })
  return res
}

const updateService = async (data: IService, serviceId: string, file: MulterFile | undefined) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }

  const res = await Services.findOneAndUpdate(
    { _id: serviceId },
    { $set: data },
    { new: true }
  )
  return res
}

export const OurServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleIdFromDB,
  deleteServiceFromDB,
  updateService
}
