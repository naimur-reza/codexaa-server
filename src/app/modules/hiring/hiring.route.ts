import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { hiringValidation } from './hiring.validation'
import { HiringController } from './hiring.controller'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  validateRequest(hiringValidation.createHiringSchema),
  HiringController.createHiring
)

router.get('/', HiringController.getAllHirings)

router.get('/category/:category', HiringController.getHiringsByCategory)

router.get('/:id', HiringController.getSingleHiring)

router.patch(
  '/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  validateRequest(hiringValidation.updateHiringSchema),
  HiringController.updateHiring
)

router.delete(
  '/:id',

  auth(userRole.ADMIN),
  HiringController.deleteHiring
)

export const HiringRoutes = router
