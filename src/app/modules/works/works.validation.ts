import { z } from 'zod'

const createWorkSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    subtitle: z.string({
      required_error: 'Subtitle is required'
    }),
    image: z.string({
      required_error: 'Image is required'
    }),
    category: z.string({
      required_error: 'Category is required'
    })
  })
})

const createWorkDetailsSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    subtitle: z.string({
      required_error: 'Subtitle is required'
    }),
    category: z.string({
      required_error: 'Category is required'
    }),
    year: z.string({
      required_error: 'Year is required'
    }),
    client: z.string({
      required_error: 'Client is required'
    }),
    duration: z.string({
      required_error: 'Duration is required'
    }),
    team: z.string({
      required_error: 'Team is required'
    }),
    description: z.string({
      required_error: 'Description is required'
    }),
    challange: z.string({
      required_error: 'Challenge is required'
    }),
    solutions: z.string({
      required_error: 'Solutions are required'
    }),
    technologies: z.string({
      required_error: 'Technologies are required'
    }),
    liveLink: z.string({
      required_error: 'Live link is required'
    })
  })
})

const updateWorkSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional()
  })
})

const updateWorkDetailsSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    category: z.string().optional(),
    year: z.string().optional(),
    client: z.string().optional(),
    duration: z.string().optional(),
    team: z.string().optional(),
    description: z.string().optional(),
    challange: z.string().optional(),
    solutions: z.string().optional(),
    technologies: z.string().optional(),
    liveLink: z.string().optional()
  })
})

export const worksValidation = {
  createWorkSchema,
  createWorkDetailsSchema,
  updateWorkSchema,
  updateWorkDetailsSchema
}
