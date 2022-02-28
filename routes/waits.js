import express from 'express'
import admin from '../middleware/admin.js'
import auth from '../middleware/auth.js'

import {
  addwait,
  getAllwaits,
  finishwait
} from '../controllers/waits.js'

const router = express.Router()

router.post('/', auth, addwait)
router.patch('/:id', auth, admin, finishwait)
router.get('/all', getAllwaits)

export default router
