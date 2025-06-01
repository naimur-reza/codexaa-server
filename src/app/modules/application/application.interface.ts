export interface IApplication {
  name: string
  jobId: string
  applicationId: string
  applicationScore: string
  contactInformation: string
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
