import { Router } from 'express'
import { AuthController } from './auth.controller'

const router = Router()

router.post('/login', AuthController.login)
router.post('/change-password', AuthController.changePassword)

export const AuthRoutes = router 