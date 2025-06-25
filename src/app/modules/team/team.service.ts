import mongoose from 'mongoose'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { ITeamMember } from './team.interface'
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

const createTeamBanner = async (files: MulterFile[] | undefined) => {
  if (!files || files.length === 0) {
    throw new Error('No banner images provided')
  }

  const bannerUrls = await Promise.all(
    files.map(async (file) => {
      const imageName = `${new Date()}-${file.originalname}`
      const path = file.path
      const { secure_url } = await sendImageToCloudinary(imageName, path)
      return {
        _id: new mongoose.Types.ObjectId(),
        url: secure_url as string
      }
    })
  )

  const res = await Team.findOneAndUpdate(
    {},
    { $push: { teamBanners: { $each: bannerUrls } } },
    { new: true, upsert: true }
  )

  return res
}

const createTeamMember = async (data: ITeamMember, file: MulterFile) => {
  const imageName = `${file.originalname}`
  const path = file.path
  const { secure_url } = await sendImageToCloudinary(imageName, path)

  const teamData = {
    ...data,
    profileImage: secure_url as string
  }

  const res = await Team.findOneAndUpdate(
    {},
    { $push: { teams: teamData } },
    { new: true, upsert: true }
  )
  return res
}

const getAllTeamBanner = async () => {
  const result = await Team.findOne({}, { teamBanners: 1, _id: 0 })
  return result
}

 

const updateTeamBanner = async (bannerId: string, files: MulterFile[]) => {
  if (!files || files.length === 0) {
    throw new Error("No banner images provided");
  }

  const file = files[0]; // assuming one banner image per update
  const imageName = `${Date.now()}-${file.originalname}`;
  const path = file.path;

  const { secure_url } = await sendImageToCloudinary(imageName, path);

  const res = await Team.findOneAndUpdate(
    { "teamBanners._id": bannerId }, // find the banner with matching ID
    { $set: { "teamBanners.$.url": secure_url } }, // update only the matched banner
    { new: true }
  );

  return res;
};


const deleteTeamBanner = async (bannerId: string) => {
  const result = await Team.updateMany(
    {},
    {
      $pull: {
        teamBanners: { _id: new mongoose.Types.ObjectId(bannerId) }
      }
    }
  )

  return result
}

const getAllTeams = async () => {
  const res = await Team.find({}, { teams: 1, _id: 0 })
  return res
}

const getSingleTeam = async (teamId: string) => {
  const res = await Team.findOne({ 'teams._id': teamId }, { 'teams.$': 1 })
  return res
}

const updateTeam = async (
  data: ITeamMember,
  teamId: string,
  file?: MulterFile
) => {
  const updateData = { ...data }

  if (file) {
    const imageName = `${new Date()}-${file.originalname}`
    const path = file.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    updateData.profileImage = secure_url as string
  }

  const res = await Team.findOneAndUpdate(
    { 'teams._id': teamId },
    { $set: { 'teams.$': updateData } },
    { new: true }
  )
  return res
}

const deleteTeam = async (teamId: string) => {
  const res = await Team.findOneAndUpdate(
    { 'teams._id': teamId },
    { $pull: { teams: { _id: teamId } } },
    { new: true }
  )
  return res
}

export const TeamService = {
  // Banner services
  createTeamBanner,
  getAllTeamBanner,
  updateTeamBanner,
  deleteTeamBanner,
  // Team member services
  createTeamMember,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam
}
