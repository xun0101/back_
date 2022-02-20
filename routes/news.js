import express from 'express'
import auth from '../middleware/auth.js'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'

import {
  show,
  getAllNews,
  delnews,
  editnews
} from '../controllers/news.js'

const router = express.Router()

router.post('/', auth, admin, show)
router.get('/all', getAllNews)
router.delete('/dels/:id', auth, admin, delnews)
router.patch('/:id', auth, admin, content('application/json'), editnews)

export default router
