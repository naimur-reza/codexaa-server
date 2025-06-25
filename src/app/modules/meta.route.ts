import { Router } from 'express'
import { MetaController } from './meta.controller'

const router = Router()

router.get('/', MetaController.getMetaStats)

export const MetaRoutes = router
