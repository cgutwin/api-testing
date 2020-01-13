import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import v1 from './v1'

export const app = express()
export const server = http.createServer(app)

app.use(bodyParser.json())
app.use('/v1', v1)

server.listen(1000, () => console.log(`Listening on port 1000`))
