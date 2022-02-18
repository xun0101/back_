import express from 'express'
import auth from '../middleware/auth.js'
import {
  addcomment,
  getAllcomments
} from '../controllers/comments.js'

const router = express.Router()

router.post('/', auth, addcomment)
router.get('/all', getAllcomments)

export default router
