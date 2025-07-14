import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'

import { TeamController } from './team.controller'
import { teamValidation } from './team.validation'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

// Team Banner Routes
router.post(
  '/banner',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.array('files', 5),
  parseFile,
  TeamController.addTeamBanners
)

router.get('/banner', TeamController.getAllTeamBanner)

router.patch(
  '/banner/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.array('files', 5),
  parseFile,
  TeamController.updateTeamBanner
)

router.delete(
  '/banner/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  TeamController.deleteTeamBanner
)

// Team Member Routes
router.post(
  '/',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(teamValidation.createTeamSchema),
  TeamController.createTeam
)

router.get('/', TeamController.getAllTeams)

router.get('/:id', TeamController.getSingleTeam)

router.patch(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(teamValidation.updateTeamSchema),
  TeamController.updateTeam
)

router.delete(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  TeamController.deleteTeam
)

export const TeamRoutes = router
