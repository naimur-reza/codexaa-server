import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { serviceValidation } from './services.validation'
import { ServicesController } from './services.controller'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(serviceValidation),
  ServicesController.createService
)

router.get('/', ServicesController.getAllServices)

router.get('/:id', ServicesController.getSingleService)

router.patch(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(serviceValidation),
  ServicesController.updateService
)

router.delete(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  ServicesController.deleteService
)

export const ServiceRoutes = router
