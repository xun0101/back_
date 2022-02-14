import express from 'express'
import {
  register,
  login,
  logout,
  signInLine,
  signInLineData,
  getUsers,
  getUserInfo,
  extend,
  addcart,
  getcart,
  editcart
} from '../controllers/users.js'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/', register)
router.get('/line', signInLine)
router.post('/login', content('application/json'), login)
router.delete('/logout', auth, logout)
router.get('/signInLineData', signInLineData)
router.get('/all', auth, getUsers)
router.get('/me', auth, getUserInfo)
router.post('/me/cart', auth, addcart)
router.get('/me/cart', auth, getcart)
router.patch('/me/cart', auth, editcart)
router.post('/extend', auth, extend)

export default router
