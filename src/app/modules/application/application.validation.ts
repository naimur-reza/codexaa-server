import { z } from 'zod'

const onlineProfilesSchema = z.object({
  linkedin: z.string({
    required_error: 'LinkedIn profile is required'
  }),
  github: z.string({
    required_error: 'GitHub profile is required'
  }),
  portfolio: z.string({
    required_error: 'Portfolio is required'
  })
})

const employeeDetailsSchema = z.object({
  currentCompany: z.string({
    required_error: 'Current company is required'
  }),
  expectedSalary: z.string({
    required_error: 'Expected salary is required'
  }),
  availableFrom: z.string({
    required_error: 'Available from date is required'
  })
})

const educationSchema = z.object({
  institution: z.string({
    required_error: 'Institution is required'
  }),
  skills: z.array(z.string()).min(1, {
    message: 'At least one skill is required'
  })
})

const createApplicationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required'
    }),
    jobId: z.string({
      required_error: 'Job ID is required'
    }),
    contactInformation: z.string({
      required_error: 'Contact information is required'
    }),
    onlineProfiles: onlineProfilesSchema,
    employeeDetails: employeeDetailsSchema,
    education: educationSchema,
    workExperience: z.string({
      required_error: 'Work experience is required'
    }),
    whyShouldHire: z.string({
      required_error: 'Why should hire is required'
    }),
    coverLetter: z.string({
      required_error: 'Cover letter is required'
    }),
    applicationDetails: z.string({
      required_error: 'Application details are required'
    })
  })
})

const updateApplicationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    jobId: z.string().optional(),
    // applicationId: z.string().optional(),
    // applicationScore: z.string().optional(),
    contactInformation: z.string().optional(),
    onlineProfiles: onlineProfilesSchema.optional(),
    employeeDetails: employeeDetailsSchema.optional(),
    education: educationSchema.optional(),
    workExperience: z.string().optional(),
    whyShouldHire: z.string().optional(),
    coverLetter: z.string().optional(),
    applicationDetails: z.string().optional()
  })
})

const updateScoreSchema = z.object({
  body: z.object({
    score: z.string({
      required_error: 'Score is required'
    })
  })
})

export const applicationValidation = {
  createApplicationSchema,
  updateApplicationSchema,
  updateScoreSchema
}
