import { z } from 'zod'

const createClientFeedbackSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    companyName: z.string({ required_error: 'Company name is required' }),
    feedback: z.string({ required_error: 'Feedback is required' }),

    // image will be handled by file upload, not in body
    rating: z.number({ required_error: 'Rating is required' }).min(1).max(5),
    designation: z.string({ required_error: 'Designation is required' })
  })
})

const updateClientFeedbackSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    feedback: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    designation: z.string().optional()
  })
})

export const clientFeedbackValidation = {
  createClientFeedbackSchema,
  updateClientFeedbackSchema
}
