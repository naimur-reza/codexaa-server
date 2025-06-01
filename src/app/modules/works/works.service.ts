import { IWorks, IWorkDetails } from './works.interface'
import { Works, WorkDetails } from './works.model'

const createWorkIntoDB = async (payload: IWorks): Promise<IWorks> => {
  const result = await Works.create(payload)
  return result
}

const createWorkDetailsIntoDB = async (
  payload: IWorkDetails
): Promise<IWorkDetails> => {
  const result = await WorkDetails.create(payload)
  return result
}

const getAllWorksFromDB = async (): Promise<IWorks[]> => {
  const result = await Works.find()
  return result
}

const getAllWorkDetailsFromDB = async (): Promise<IWorkDetails[]> => {
  const result = await WorkDetails.find()
  return result
}

const getSingleWorkFromDB = async (id: string): Promise<IWorks | null> => {
  const result = await Works.findById(id)
  return result
}

const getSingleWorkDetailsFromDB = async (
  id: string
): Promise<IWorkDetails | null> => {
  const result = await WorkDetails.findById(id)
  return result
}

const deleteWorkFromDB = async (id: string): Promise<IWorks | null> => {
  const result = await Works.findByIdAndDelete(id)
  return result
}

const deleteWorkDetailsFromDB = async (
  id: string
): Promise<IWorkDetails | null> => {
  const result = await WorkDetails.findByIdAndDelete(id)
  return result
}

const updateWork = async (
  id: string,
  payload: Partial<IWorks>
): Promise<IWorks | null> => {
  const result = await Works.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  })
  return result
}

const updateWorkDetails = async (
  id: string,
  payload: Partial<IWorkDetails>
): Promise<IWorkDetails | null> => {
  const result = await WorkDetails.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  })
  return result
}

const getWorksByCategory = async (category: string): Promise<IWorks[]> => {
  const result = await Works.find({ category })
  return result
}

const getWorkDetailsByCategory = async (
  category: string
): Promise<IWorkDetails[]> => {
  const result = await WorkDetails.find({ category })
  return result
}

export const WorksService = {
  createWorkIntoDB,
  createWorkDetailsIntoDB,
  getAllWorksFromDB,
  getAllWorkDetailsFromDB,
  getSingleWorkFromDB,
  getSingleWorkDetailsFromDB,
  deleteWorkFromDB,
  deleteWorkDetailsFromDB,
  updateWork,
  updateWorkDetails,
  getWorksByCategory,
  getWorkDetailsByCategory
}
