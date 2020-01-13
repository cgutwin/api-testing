import express from 'express'
import * as Auth from './controllers/auth'

const router = express.Router()

router.get('/', Auth.get)
router.post('/', Auth.post)

export default router
