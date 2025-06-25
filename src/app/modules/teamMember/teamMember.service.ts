import { TeamMember } from './teamMember.model'
import { ITeamMember } from './teamMember.interface'

const createTeamMember = async (
  teamMemberData: ITeamMember
): Promise<ITeamMember> => {
  const result = await TeamMember.create(teamMemberData)
  return result
}

const getAllTeamMembers = async (): Promise<ITeamMember[]> => {
  const result = await TeamMember.find().populate('team')
  return result
}

const getTeamMemberById = async (id: string): Promise<ITeamMember | null> => {
  const result = await TeamMember.findById(id).populate('team')
  return result
}

const getTeamMembersByTeam = async (teamId: string): Promise<ITeamMember[]> => {
  const result = await TeamMember.find({ team: teamId }).populate('team')
  return result
}

const updateTeamMember = async (
  id: string,
  updateData: Partial<ITeamMember>
): Promise<ITeamMember | null> => {
  const result = await TeamMember.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  }).populate('team')
  return result
}

const deleteTeamMember = async (id: string): Promise<ITeamMember | null> => {
  const result = await TeamMember.findByIdAndDelete(id)
  return result
}

export const TeamMemberService = {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  getTeamMembersByTeam,
  updateTeamMember,
  deleteTeamMember
}
