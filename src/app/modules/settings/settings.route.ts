import express from 'express'
import * as settingsController from './settings.controller'
import validateRequest from '../../middlewares/validateRequest'
import { settingsUpdateSchema } from './settings.validation'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = express.Router()

router.get('/', settingsController.getSettings)
router.patch(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  validateRequest(settingsUpdateSchema),
  settingsController.updateSettings
)
router.post(
  '/nav-logo',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  upload.single('logo'),
  parseFile,
  settingsController.uploadNavLogo
)
router.post(
  '/footer-logo',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  upload.single('logo'),
  parseFile,
  settingsController.uploadFooterLogo
)

export default router
