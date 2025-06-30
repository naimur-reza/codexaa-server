import { Request, Response } from 'express'
import * as settingsService from './settings.service'
import sendResponse from '../../utils/sendResponse'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'

export const getSettings = async (req: Request, res: Response) => {
  const settings = await settingsService.getSettings()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Settings fetched successfully',
    data: settings
  })
}

export const updateSettings = async (req: Request, res: Response) => {
  const updated = await settingsService.updateSettings(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Settings updated successfully',
    data: updated
  })
}

export const uploadNavLogo = async (req: Request, res: Response) => {
    console.log(req.file)
  if (!req.file) throw new Error('No file uploaded')
  const result = await sendImageToCloudinary('nav-logo', req.file.path)
  const url = typeof result.url === 'string' ? result.url : (result.secure_url as string)
  const updated = await settingsService.updateSettings({ navLogo: url })
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Nav logo uploaded',
    data: updated
  })
}

export const uploadFooterLogo = async (req: Request, res: Response) => {
  if (!req.file) throw new Error('No file uploaded')
  const result = await sendImageToCloudinary('footer-logo', req.file.path)
  const url = typeof result.url === 'string' ? result.url : (result.secure_url as string)
  const updated = await settingsService.updateSettings({ 'footer.logo': url })
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Footer logo uploaded',
    data: updated
  })
} 