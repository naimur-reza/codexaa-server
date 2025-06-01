import { z } from 'zod'

 const createSolutionSchema = z.object({
  body: z.object({
    title: z.string(),
    subtitle: z.string()
  })
})



 const updateSolutionSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  })
})


export const solutionSchema = {createSolutionSchema, updateSolutionSchema}