import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { solutionsValidation } from './solutions.validation'
import { SolutionsController } from './solutions.controller'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(solutionsValidation),
  SolutionsController.createSolution
)

router.get('/', SolutionsController.getAllSolutions)

router.get('/:id', SolutionsController.getSingleSolution)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(solutionsValidation),
  SolutionsController.updateSolution
)

router.delete('/:id', SolutionsController.deleteSolution)

export const SolutionsRoutes = router
