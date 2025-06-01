import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { applicationValidation } from './application.validation'
import { ApplicationController } from './application.controller'

const router = Router()

router.post(
  '/',
  validateRequest(applicationValidation.createApplicationSchema),
  ApplicationController.createApplication
)

router.get('/', ApplicationController.getAllApplications)

router.get('/job/:jobId', ApplicationController.getApplicationsByJobId)

router.get('/:id', ApplicationController.getSingleApplication)

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

router.delete('/:id', ApplicationController.deleteApplication)

export const ApplicationRoutes = router
