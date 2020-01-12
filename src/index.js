import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import * as routes from './routes'

export const app = express()
export const server = http.createServer(app)

app.use(bodyParser.json())

app.use('/auth', routes.auth)

server.listen(1000, () => console.log(`Listening on port 1000`))
