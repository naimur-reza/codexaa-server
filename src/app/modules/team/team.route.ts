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
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.array('files', 5),
  parseFile,
  TeamController.addTeamBanners
)

router.get(
  '/banner',
  auth(userRole.ADMIN, userRole.MODERATOR),
  TeamController.getAllTeamBanner
)

router.patch(
  '/banner/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.array('files', 5),
  parseFile,
  TeamController.updateTeamBanner
)

router.delete(
  '/banner/:id',
  auth(userRole.ADMIN),
  TeamController.deleteTeamBanner
)

// Team Member Routes
router.post(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(teamValidation.createTeamSchema),
  TeamController.createTeam
)

router.get(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  TeamController.getAllTeams
)

router.get(
  '/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  TeamController.getSingleTeam
)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  auth(userRole.ADMIN, userRole.MODERATOR),
  validateRequest(teamValidation.updateTeamSchema),
  TeamController.updateTeam
)

router.delete('/:id', auth(userRole.ADMIN), TeamController.deleteTeam)

export const TeamRoutes = router
