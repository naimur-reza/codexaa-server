import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { applicationValidation } from './application.validation'
import { ApplicationController } from './application.controller'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'
import { parseFile } from '../../utils/parseFile'
import { upload } from '../../utils/sendImageToCloudinary'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(applicationValidation.createApplicationSchema),
  ApplicationController.createApplication
)

router.get(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  ApplicationController.getAllApplications
)

router.get(
  '/job/:jobId',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  ApplicationController.getApplicationsByJobId
)

router.get(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
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
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  ApplicationController.deleteApplication
)

export const ApplicationRoutes = router
