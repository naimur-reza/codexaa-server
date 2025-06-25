import { Router } from 'express'
import { ServiceRoutes } from '../modules/services/services.route'
import worksRoutes from '../modules/works/works.route'
import { TeamRoutes } from '../modules/team/team.route'
import { HiringRoutes } from '../modules/hiring/hiring.route'
import { ApplicationRoutes } from '../modules/application/application.route'
import { SolutionsRoutes } from '../modules/solutions/solutions.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { MetaRoutes } from '../modules/meta.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/services',
    route: ServiceRoutes
  },
  {
    path: '/solutions',
    route: SolutionsRoutes
  },
  {
    path: '/works',
    route: worksRoutes
  },
  {
    path: '/team',
    route: TeamRoutes
  },
  {
    path: '/hiring',
    route: HiringRoutes
  },
  {
    path: '/application',
    route: ApplicationRoutes
  },
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/meta',
    route: MetaRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
