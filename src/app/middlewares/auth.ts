import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import { USER_ROLE } from '../constant/userRole'
import verifyToken from '../utils/verifyToken'
import { Users } from '../modules/users/user.model'

export const auth = (...requiredRoles: USER_ROLE[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized'
      })
      return
    }

    const { user } = verifyToken(token, process.env.JWT_SECRET!)

    const userData = await Users.findById(user.id)

    if (userData?.status === 'inactive') {
      res.status(403).json({
        status: 403,
        message: 'User is inactive'
      })
      return
    }

    if (!user) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized'
      })
      return
    }

    if (
      requiredRoles.length &&
      !requiredRoles.includes(user.role as USER_ROLE)
    ) {
      console.log(requiredRoles, user.role)
      console.log('Forbidden access')
      res.status(403).json({
        status: 403,
        message: 'Forbidden'
      })
      return
    }

    req.user = user

    // more logic if needed
    next()
  })
}
