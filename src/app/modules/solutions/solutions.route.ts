import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { SolutionsController } from './solutions.controller'
import { solutionSchema } from './solutions.validation'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(solutionSchema.createSolutionSchema),
  SolutionsController.createSolution
)

router.get('/', SolutionsController.getAllSolutions)

router.get('/:id', SolutionsController.getSingleSolution)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(solutionSchema.updateSolutionSchema),
  SolutionsController.updateSolution
)

router.delete('/:id', SolutionsController.deleteSolution)

export const SolutionsRoutes = router
