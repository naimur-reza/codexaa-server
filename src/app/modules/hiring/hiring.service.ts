import { IHiring } from './hiring.interface'
import { Hiring } from './hiring.model'

const createHiringIntoDB = async (data: IHiring) => {
  const res = await Hiring.create(data)
  return res
}

const getAllHiringsFromDB = async () => {
  const res = await Hiring.find()
  return res
}

const getSingleHiringFromDB = async (hiringId: string) => {
  const res = await Hiring.findById({ _id: hiringId })
  return res
}

const deleteHiringFromDB = async (hiringId: string) => {
  const res = await Hiring.deleteOne({ _id: hiringId })
  return res
}

const updateHiring = async (data: IHiring, hiringId: string) => {
  const res = await Hiring.findOneAndUpdate(
    { _id: hiringId },
    { $set: data },
    { new: true }
  )
  return res
}

const getHiringsByCategory = async (category: string) => {
  const res = await Hiring.find({ category })
  return res
}

export const HiringService = {
  createHiringIntoDB,
  getAllHiringsFromDB,
  getSingleHiringFromDB,
  deleteHiringFromDB,
  updateHiring,
  getHiringsByCategory
}
