import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { worksValidation } from './works.validation'
import { WorksController } from './works.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

// Works routes
router.post(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(worksValidation.createWorkSchema),
  WorksController.createWork
)

router.get('/', WorksController.getAllWorks)

router.get('/:id', WorksController.getSingleWork)

router.patch(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(worksValidation.updateWorkSchema),
  WorksController.updateWork
)

router.delete(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  WorksController.deleteWork
)

router.get('/category/:category', WorksController.getWorksByCategory)

export default router
