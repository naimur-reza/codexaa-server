import { z } from 'zod'

export const solutionsValidation = z.object({
  body: z.object({
    title: z.string(),
    subtitle: z.string()
    // image: z
    //   .instanceof(File)
    //   .refine((file) => file.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    //   .refine(
    //     (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
    //     'Only .jpg, .jpeg, .png and .webp formats are supported.'
    //   )
  })
})
