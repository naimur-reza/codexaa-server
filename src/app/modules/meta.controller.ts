import catchAsync from '../utils/catchAsync'
import sendResponse from '../utils/sendResponse'
import httpStatus from 'http-status'
import { TeamService } from './team/team.service'
import { ApplicationService } from './application/application.service'
import { WorksService } from './works/works.service'
import { OurServices } from './services/services.service'
import { SolutionsService } from './solutions/solutions.service'

const getMetaStats = catchAsync(async (req, res) => {
  // Get all banners
  const bannersResult = await TeamService.getAllTeamBanner()
  // Get all team members
  const teamsResult = await TeamService.getAllTeams()
  // Get all applications
  const applicationsResult = await ApplicationService.getAllApplicationsFromDB()
  // Get all works
  const worksResult = await WorksService.getAllWorksFromDB()
  // Get all services
  const servicesResult = await OurServices.getAllServicesFromDB()
  // Get all solutions
  const solutionsResult = await SolutionsService.getAllSolutionsFromDB()

  // Count banners (flatten all teamBanners arrays)
  let bannerCount = 0
  if (Array.isArray(bannersResult)) {
    bannerCount = bannersResult.reduce(
      (acc, item) =>
        acc + (Array.isArray(item.teamBanners) ? item.teamBanners.length : 0),
      0
    )
  }

  // Count team members (flatten all teams arrays)
  let teamMemberCount = 0
  if (Array.isArray(teamsResult)) {
    teamMemberCount = teamsResult.reduce(
      (acc, item) => acc + (Array.isArray(item.teams) ? item.teams.length : 0),
      0
    )
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meta stats retrieved successfully',
    data: {
      bannerCount,
      teamMemberCount,
      applicationCount: Array.isArray(applicationsResult)
        ? applicationsResult.length
        : 0,
      worksCount: Array.isArray(worksResult) ? worksResult.length : 0,
      serviceCount: Array.isArray(servicesResult) ? servicesResult.length : 0,
      solutionCount: Array.isArray(solutionsResult) ? solutionsResult.length : 0
    }
  })
})

export const MetaController = {
  getMetaStats
}
