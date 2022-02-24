import express from 'express'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'

import {
  addcomment,
  getAllcomments,
  delcomments
} from '../controllers/comments.js'

const router = express.Router()

router.post('/', auth, addcomment)
router.get('/all', getAllcomments)
router.delete('/dels/:id', auth, admin, delcomments)

export default router
