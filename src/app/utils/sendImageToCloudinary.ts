import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import fs from 'fs'
 
import os from 'os'
import { UploadApiResponse } from 'cloudinary'
import config from '../config'

// ⛅️ Send image to Cloudinary
export const sendImageToCloudinary = async (
  imageName: string,
  filePath: string,
  resource_type: 'image' | 'raw' = 'image'
): Promise<Record<string, unknown>> => {
  cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret
  })

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      { public_id: imageName , resource_type},
      function (error, result) {
        // Delete the file whether it succeeds or fails
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting temp file:', err)
          }
        })

        if (error) {
          reject(error)
        } else {
          resolve(result as UploadApiResponse)
        }
      }
    )
  })
}

// 🧊 Multer config to store file in /tmp (safe for serverless)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tmpDir = os.tmpdir() // ✅ /tmp directory (writable in serverless)
    cb(null, tmpDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({ storage })
