import { Router } from 'express'

import { CreateUserController } from '../useCases/User/create/CreateUserController'
import { FindUserByIdController } from '../useCases/User/findById/FindUserByIdController'

const findUserByIdController = new FindUserByIdController()
const createUserController = new CreateUserController()

export const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/:id', findUserByIdController.handle)
