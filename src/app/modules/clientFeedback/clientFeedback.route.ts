import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { clientFeedbackValidation } from './clientFeedback.validation'
import { ClientFeedbackController } from './clientFeedback.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(clientFeedbackValidation.createClientFeedbackSchema),
  ClientFeedbackController.createClientFeedback
)

router.get('/', ClientFeedbackController.getAllClientFeedbacks)

router.get('/:id', ClientFeedbackController.getSingleClientFeedback)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(clientFeedbackValidation.updateClientFeedbackSchema),
  ClientFeedbackController.updateClientFeedback
)

router.delete('/:id', ClientFeedbackController.deleteClientFeedback)

export default router
