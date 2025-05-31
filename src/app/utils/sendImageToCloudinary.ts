import { v2 as cloudinary } from 'cloudinary'
// import config from '../config'
import multer from 'multer'
import fs from 'fs'
import { UploadApiResponse } from 'cloudinary'

// todo
export const sendImageToCloudinary = async (
  imageName: string,
  path: string
): Promise<Record<string, unknown>> => {
  cloudinary.config({
    cloud_name: 'dxqpqk3jz',
    api_key: '731424783536331',
    api_secret: '9Qovom3nA9627FeVph4jD5925so'
  })

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName },
      function (error, result) {
        // Delete the file regardless of success or error
        fs.unlink(path, (err) => {
          if (err) {
            console.error('Error deleting file:', err)
          }
        })

        if (error) {
          reject(error)
          return
        }
        resolve(result as UploadApiResponse)
      }
    )
  })
}

// this is the path to save the file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/') //  <---  here is the path to save the file;
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({ storage: storage })
