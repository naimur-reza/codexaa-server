import express from 'express'
import * as settingsController from './settings.controller'
import validateRequest from '../../middlewares/validateRequest'
import { settingsUpdateSchema } from './settings.validation'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'

const router = express.Router()

router.get('/', settingsController.getSettings)
router.patch(
  '/',
  validateRequest(settingsUpdateSchema),
  settingsController.updateSettings
)
router.post(
  '/nav-logo',
  upload.single('logo'),
  parseFile,
  settingsController.uploadNavLogo
)
router.post(
  '/footer-logo',
  upload.single('logo'),
  parseFile,
  settingsController.uploadFooterLogo
)

export default router
