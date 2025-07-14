import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { clientFeedbackValidation } from './clientFeedback.validation'
import { ClientFeedbackController } from './clientFeedback.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  upload.single('file'),
  parseFile,
  validateRequest(clientFeedbackValidation.createClientFeedbackSchema),
  ClientFeedbackController.createClientFeedback
)

router.get('/', ClientFeedbackController.getAllClientFeedbacks)

router.get('/:id', ClientFeedbackController.getSingleClientFeedback)

router.patch(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  upload.single('file'),
  parseFile,
  validateRequest(clientFeedbackValidation.updateClientFeedbackSchema),
  ClientFeedbackController.updateClientFeedback
)

router.delete(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  ClientFeedbackController.deleteClientFeedback
)

export default router
