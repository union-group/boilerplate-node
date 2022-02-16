import { Router } from 'express'

import { usersRoutes } from './User.routes'

export const router = Router()

router.use('/users', usersRoutes)
