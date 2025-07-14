import { Router } from 'express'
import { auth } from '../../middlewares/auth'
import { userRole } from '../../constant/userRole'
import { UserController } from './user.controller'

const router = Router()

router.post(
  '/',

  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  UserController.createUser
)

router.get(
  '/',
  // auth(userRole.ADMIN, userRole.MODERATOR),
  UserController.getAllUsers
)

router.get(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN, userRole.MODERATOR),
  UserController.getUserByUsername
)

router.patch(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  UserController.updateUser
)

router.delete(
  '/:id',
  auth(userRole.SUPER_ADMIN, userRole.ADMIN),
  UserController.deleteUser
)

export const UserRoutes = router
