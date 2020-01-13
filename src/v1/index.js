import express from 'express'
import * as routes from './routes'

const router = express.Router()

router.use('/auth', routes.auth)

export default router
