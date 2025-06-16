import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { worksValidation } from './works.validation'
import { WorksController } from './works.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'

const router = Router()

// Works routes
router.post(
  '/',
  upload.single('image'),
  parseFile,
  validateRequest(worksValidation.createWorkSchema),
  WorksController.createWork
)

router.get('/', WorksController.getAllWorks)

router.get('/:id', WorksController.getSingleWork)

router.patch(
  '/:id',
  upload.single('image'),
  parseFile,
  validateRequest(worksValidation.updateWorkSchema),
  WorksController.updateWork
)

router.delete('/:id', WorksController.deleteWork)

router.get('/category/:category', WorksController.getWorksByCategory)

export default router
