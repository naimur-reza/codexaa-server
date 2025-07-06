import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogService } from './blog.service'
import httpStatus from 'http-status'

const createBlog = catchAsync(async (req, res) => {
  const data = req.body
  const file = req.file
  const result = await BlogService.createBlogIntoDB(data, file)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result
  })
})

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs retrieved successfully',
    data: result
  })
})

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogService.getSingleBlogFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = req.body
  const file = req.file
  const result = await BlogService.updateBlog(data, id, file)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogService.deleteBlogFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result
  })
})

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
}
