import express from 'express'
import auth from '../middleware/auth.js'

import {
  addwait,
  getAllwaits
} from '../controllers/waits.js'

const router = express.Router()

router.post('/', auth, addwait)
router.get('/all', getAllwaits)

export default router
