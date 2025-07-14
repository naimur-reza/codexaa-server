import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { SolutionsController } from './solutions.controller'
import { solutionSchema } from './solutions.validation'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.ADMIN),
  upload.single('file'),
  parseFile,
  validateRequest(solutionSchema.createSolutionSchema),
  SolutionsController.createSolution
)

router.get('/', SolutionsController.getAllSolutions)

router.get('/:id', SolutionsController.getSingleSolution)

router.patch(
  '/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(solutionSchema.updateSolutionSchema),
  SolutionsController.updateSolution
)

router.delete('/:id', auth(userRole.ADMIN), SolutionsController.deleteSolution)

export const SolutionsRoutes = router
