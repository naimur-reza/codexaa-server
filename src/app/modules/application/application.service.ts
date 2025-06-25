import { IApplication } from './application.interface'
import { Application } from './application.model'

const createApplicationIntoDB = async (data: IApplication) => {
  const res = await Application.create(data)
  return res
}

const getAllApplicationsFromDB = async () => {
  const res = await Application.find().populate('jobId')
    const updatedApplications = res.map(app => {
      const appObj = app.toObject();
      return {
        ...appObj,
        jobTitle: (appObj.jobId && typeof appObj.jobId === 'object' && appObj.jobId !== null && (appObj.jobId as { title?: string }).title)
          ? (appObj.jobId as { title?: string }).title
          : null,
      };
    });

    return updatedApplications;
}

const getSingleApplicationFromDB = async (applicationId: string) => {
  const res = await Application.findById({ _id: applicationId })
  return res
}

const deleteApplicationFromDB = async (applicationId: string) => {
  const res = await Application.deleteOne({ _id: applicationId })
  return res
}

const updateApplication = async (data: IApplication, applicationId: string) => {
  const res = await Application.findOneAndUpdate(
    { _id: applicationId },
    { $set: data },
    { new: true }
  )
  return res
}

const getApplicationsByJobId = async (jobId: string) => {
  const res = await Application.find({ jobId })
  return res
}

const updateApplicationScore = async (applicationId: string, score: string) => {
  const res = await Application.findOneAndUpdate(
    { _id: applicationId },
    { $set: { applicationScore: score } },
    { new: true }
  )
  return res
}

export const ApplicationService = {
  createApplicationIntoDB,
  getAllApplicationsFromDB,
  getSingleApplicationFromDB,
  deleteApplicationFromDB,
  updateApplication,
  getApplicationsByJobId,
  updateApplicationScore
}
