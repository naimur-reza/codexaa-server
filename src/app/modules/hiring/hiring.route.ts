import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { hiringValidation } from './hiring.validation'
import { HiringController } from './hiring.controller'

const router = Router()

router.post(
  '/',
  validateRequest(hiringValidation.createHiringSchema),
  HiringController.createHiring
)

router.get('/', HiringController.getAllHirings)

router.get('/category/:category', HiringController.getHiringsByCategory)

router.get('/:id', HiringController.getSingleHiring)

router.patch(
  '/:id',
  validateRequest(hiringValidation.updateHiringSchema),
  HiringController.updateHiring
)

router.delete('/:id', HiringController.deleteHiring)

export const HiringRoutes = router
