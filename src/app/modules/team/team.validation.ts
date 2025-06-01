import { z } from 'zod'

const socialsSchema = z.object({
  facebook: z.string().optional(),
  linkedin: z.string().optional(),
  behance: z.string().optional()
})

const teamMemberSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }),
  bio: z.string({
    required_error: 'Bio is required'
  }),
  profileImage: z.string({
    required_error: 'Profile image is required'
  }),
  socials: socialsSchema,
  description: z.string({
    required_error: 'Description is required'
  }),
  image: z.string({
    required_error: 'Image is required'
  }),
  category: z.string({
    required_error: 'Category is required'
  })
})

const createTeamSchema = z.object({
  body: z.object({
    teamBanner: z.string({
      required_error: 'Team banner is required'
    }),
    teams: z.array(teamMemberSchema).min(1, {
      message: 'At least one team member is required'
    })
  })
})

const updateTeamSchema = z.object({
  body: z.object({
    teamBanner: z.string().optional(),
    teams: z.array(teamMemberSchema).optional()
  })
})

export const teamValidation = {
  createTeamSchema,
  updateTeamSchema
}
