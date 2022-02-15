import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import {
  show,
  getAllNews,
  editNewById
} from '../controllers/news.js'

const router = express.Router()

router.post('/', auth, admin, content('multipart/form-data'), show)
router.get('/all', auth, admin, getAllNews)
router.patch('/:id', auth, admin, content('multipart/form-data'), editNewById)

export default router
