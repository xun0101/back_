import express from 'express'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import {
  show,
  getAllNews,
  delnews
} from '../controllers/news.js'

const router = express.Router()

router.post('/', auth, admin, show)
router.get('/all', getAllNews)
router.delete('/dels/:id', delnews)

export default router
