import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { IBlog } from './blog.interface'
import { Blog } from './blog.model'

interface MulterFile {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}

const createBlogIntoDB = async (
  data: IBlog,
  file: MulterFile | undefined
) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }
  const res = await Blog.create(data)
  return res
}

const getAllBlogsFromDB = async () => {
  const res = await Blog.find()
  return res
}

const getSingleBlogFromDB = async (blogId: string) => {
  const res = await Blog.findById(blogId)
  return res
}

const deleteBlogFromDB = async (blogId: string) => {
  const res = await Blog.deleteOne({ _id: blogId })
  return res
}

const updateBlog = async (
  data: IBlog,
  blogId: string,
  file: MulterFile | undefined
) => {
  if (file) {
    const imageName = `${new Date()}`
    const path = file?.path
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    data.image = secure_url as string
  }
  const res = await Blog.findOneAndUpdate(
    { _id: blogId },
    { $set: data },
    { new: true }
  )
  return res
}

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlog
} 