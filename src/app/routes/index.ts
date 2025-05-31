import { Router } from 'express'
import { ServiceRoutes } from '../modules/services/services.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/services',
    route: ServiceRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
