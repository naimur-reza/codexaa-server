import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { BlogController } from './blog.controller'
import { blogValidation } from './blog.validation'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'

const router = Router()

router.post(
  '/',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(blogValidation.createBlogSchema),
  BlogController.createBlog
)

router.get('/', BlogController.getAllBlogs)

router.get('/:id', BlogController.getSingleBlog)

router.patch(
  '/:id',
  auth(userRole.ADMIN, userRole.MODERATOR),
  upload.single('file'),
  parseFile,
  validateRequest(blogValidation.updateBlogSchema),
  BlogController.updateBlog
)

router.delete(
  '/:id',

  auth(userRole.ADMIN),
  BlogController.deleteBlog
)

export const BlogRoutes = router
