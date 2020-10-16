import { Router } from 'express'
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} from '../controllers/User.controller'

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router
