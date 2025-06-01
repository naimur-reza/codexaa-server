import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { worksValidation } from './works.validation'
import { WorksController } from './works.controller'

const router = Router()

// Works routes
router.post(
  '/',
  validateRequest(worksValidation.createWorkSchema),
  WorksController.createWork
)

router.get('/', WorksController.getAllWorks)

router.get('/category/:category', WorksController.getWorksByCategory)

router.get('/:id', WorksController.getSingleWork)

router.patch(
  '/:id',
  validateRequest(worksValidation.updateWorkSchema),
  WorksController.updateWork
)

router.delete('/:id', WorksController.deleteWork)

// Work Details routes
router.post(
  '/details',
  validateRequest(worksValidation.createWorkDetailsSchema),
  WorksController.createWorkDetails
)

router.get('/details', WorksController.getAllWorkDetails)

router.get(
  '/details/category/:category',
  WorksController.getWorkDetailsByCategory
)

router.get('/details/:id', WorksController.getSingleWorkDetails)

router.patch(
  '/details/:id',
  validateRequest(worksValidation.updateWorkDetailsSchema),
  WorksController.updateWorkDetails
)

router.delete('/details/:id', WorksController.deleteWorkDetails)

export const WorksRoutes = router
