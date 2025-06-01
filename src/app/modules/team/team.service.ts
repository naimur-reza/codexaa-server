import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { ITeam } from './team.interface'
import { Team } from './team.model'
 

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

const createTeamIntoDB = async (
  data: ITeam,
  file: MulterFile | undefined
) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.teamBanner = secure_url as string
  }

  const res = await Team.create(data)
  return res
}

const getAllTeamsFromDB = async () => {
  const res = await Team.find()
  return res
}

const getSingleTeamFromDB = async (teamId: string) => {
  const res = await Team.findById({ _id: teamId })
  return res
}

const deleteTeamFromDB = async (teamId: string) => {
  const res = await Team.deleteOne({ _id: teamId })
  return res
}

const updateTeam = async (
  data: ITeam,
  teamId: string,
  file: MulterFile | undefined
) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.teamBanner = secure_url as string
  }

  const res = await Team.findOneAndUpdate(
    { _id: teamId },
    { $set: data },
    { new: true }
  )
  return res
}

export const TeamService = {
  createTeamIntoDB,
  getAllTeamsFromDB,
  getSingleTeamFromDB,
  deleteTeamFromDB,
  updateTeam
} 