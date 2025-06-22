import { z } from 'zod'

const socialsSchema = z.object({
  facebook: z.string().optional(),
  linkedin: z.string().optional(),
  behance: z.string().optional()
})

 

const createTeamSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required'
    }),
    bio: z.string({
      required_error: 'Bio is required'
    }),
    socials: socialsSchema,
    description: z.string({
      required_error: 'Description is required'
    }),
    category: z.string({
      required_error: 'Category is required'
    })
  })
})

const updateTeamSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    bio: z.string().optional(),
    socials: socialsSchema.optional(),
    description: z.string().optional(),
    category: z.string().optional()
  })
})

export const teamValidation = {
  createTeamSchema,
  updateTeamSchema
}
