import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { applicationValidation } from './application.validation'
import { ApplicationController } from './application.controller'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  validateRequest(applicationValidation.createApplicationSchema),
  ApplicationController.createApplication
)

router.get(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  ApplicationController.getAllApplications
)

router.get(
  '/job/:jobId',
  auth(userRole.ADMIN, userRole.MODERATOR),
  ApplicationController.getApplicationsByJobId
)

router.get(
  '/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  ApplicationController.getSingleApplication
)

router.patch(
  '/:id',
  validateRequest(applicationValidation.updateApplicationSchema),
  ApplicationController.updateApplication
)

router.patch(
  '/:id/score',
  validateRequest(applicationValidation.updateScoreSchema),
  ApplicationController.updateApplicationScore
)

router.delete(
  '/:id',
  auth(userRole.ADMIN),
  ApplicationController.deleteApplication
)

export const ApplicationRoutes = router
