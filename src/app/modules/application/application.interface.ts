import { Types } from 'mongoose'
export interface IApplication {
  name: string
  jobId: typeof Types.ObjectId
  applicationId: string
  contactInformation: string
  resumeDriveLink: string
  onlineProfiles: {
    linkedin: string
    github: string
    portfolio: string
  }
  employeeDetails: {
    currentCompany: string
    expectedSalary: string
    availableFrom: string
  }
  education: {
    institution: string
    skills: string[]
  }
  workExperience: string
  whyShouldHire: string
  coverLetter: string
  applicationDetails: string
}
