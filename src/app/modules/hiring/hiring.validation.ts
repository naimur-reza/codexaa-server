import { z } from 'zod'

const createHiringSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    experience: z.string({
      required_error: 'Experience is required'
    }),
    requirements: z.string({
      required_error: 'Requirements are required'
    }),
    description: z.string({
      required_error: 'Description is required'
    }),
    location: z.string({
      required_error: 'Location is required'
    }),
    workingHours: z.string({
      required_error: 'Working hours are required'
    }),
    jobNature: z.string({
      required_error: 'Job nature is required'
    }),
    benefits: z.string({
      required_error: 'Benefits are required'
    }),
    reponsibilities: z.string({
      required_error: 'Responsibilities are required'
    }),
    applicationDeadline: z.string({
      required_error: 'Application deadline is required'
    }),
    skillsRequired: z.array(z.string()).min(1, {
      message: 'At least one skill is required'
    }),
    category: z.string({
      required_error: 'Category is required'
    }),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaTags: z.array(z.string()).optional(),
    metaImageAlt: z.string().optional()
  })
})

const updateHiringSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    experience: z.string().optional(),
    requirements: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    workingHours: z.string().optional(),
    jobNature: z.string().optional(),
    benefits: z.string().optional(),
    reponsibilities: z.string().optional(),
    applicationDeadline: z.string().optional(),
    skillsRequired: z.array(z.string()).optional(),
    category: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaTags: z.array(z.string()).optional(),
    metaImageAlt: z.string().optional()
  })
})

export const hiringValidation = {
  createHiringSchema,
  updateHiringSchema
}
