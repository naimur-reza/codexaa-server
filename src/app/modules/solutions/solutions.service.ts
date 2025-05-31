import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { ISolution } from './solutions.interface'
import { Solutions } from './solutions.model'

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

const createSolutionIntoDB = async (data: ISolution, file: MulterFile | undefined) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }

  const res = await Solutions.create(data)
  return res
}

const getAllSolutionsFromDB = async () => {
  const res = await Solutions.find()
  return res
}

const getSingleSolutionFromDB = async (solutionId: string) => {
  const res = await Solutions.findById(solutionId)
  return res
}

const deleteSolutionFromDB = async (solutionId: string) => {
  const res = await Solutions.deleteOne({ _id: solutionId })
  return res
}

const updateSolution = async (data: ISolution, solutionId: string, file: MulterFile | undefined) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }

  const res = await Solutions.findOneAndUpdate(
    { _id: solutionId },
    { $set: data },
    { new: true }
  )
  return res
}

export const SolutionsService = {
  createSolutionIntoDB,
  getAllSolutionsFromDB,
  getSingleSolutionFromDB,
  deleteSolutionFromDB,
  updateSolution
}
