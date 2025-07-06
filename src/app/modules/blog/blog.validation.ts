import { z } from 'zod'

export const blogValidation = {
  createBlogSchema: z.object({
    body: z.object({
      title: z.string({ required_error: 'Title is required' }),
      subtitle: z.string({ required_error: 'Subtitle is required' }),
      content: z.string({ required_error: 'Content is required' }),
      author: z.string({ required_error: 'Author is required' })
      // image, tags, meta fields handled by file upload and optional
    })
  }),
  updateBlogSchema: z.object({
    body: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      content: z.string().optional(),
      author: z.string().optional()
      // image, tags, meta fields handled by file upload and optional
    })
  })
}
