import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'

import { TeamController } from './team.controller'
import { teamValidation } from './team.validation'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(teamValidation.createTeamSchema),
  TeamController.createTeam
)

router.get('/', TeamController.getAllTeams)

router.get('/:id', TeamController.getSingleTeam)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(teamValidation.updateTeamSchema),
  TeamController.updateTeam
)

router.delete('/:id', TeamController.deleteTeam)

export const TeamRoutes = router
