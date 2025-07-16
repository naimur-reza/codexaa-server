import { Types } from 'mongoose'
export interface IApplication {
  name: string
  email: string
  jobId: typeof Types.ObjectId
  applicationId: string
  contactInformation: string
  resume: string
  onlineProfiles: {
    linkedin: string
    github: string
    portfolio: string
  }
  employeeDetails: {
    availableFrom: string
  }
  workExperience: string
  whyShouldHire: string
  coverLetter: string
  applicationDetails: string
}
