import { Router } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import { parseFile } from '../../utils/parseFile'
import validateRequest from '../../middlewares/validateRequest'
import { BlogController } from './blog.controller'
import { blogValidation } from './blog.validation'
 

const router = Router()

router.post(
  '/',
  upload.single('file'),
  parseFile,
  validateRequest(blogValidation.createBlogSchema),
  BlogController.createBlog
)

router.get('/', BlogController.getAllBlogs)

router.get('/:id', BlogController.getSingleBlog)

router.patch(
  '/:id',
  upload.single('file'),
  parseFile,
  validateRequest(blogValidation.updateBlogSchema),
  BlogController.updateBlog
)

router.delete('/:id', BlogController.deleteBlog)

export const BlogRoutes = router 