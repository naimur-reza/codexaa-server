import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { serviceValidation } from './services.validation'
import { ServicesController } from './services.controller'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(serviceValidation),
  ServicesController.createService
)

router.get('/', ServicesController.getAllServices)

router.get('/:id', ServicesController.getSingleService)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(serviceValidation),
  ServicesController.updateService
)

router.delete('/:id', ServicesController.deleteService)

export const ServiceRoutes = router
