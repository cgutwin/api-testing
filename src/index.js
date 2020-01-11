import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'

export const app = express()
export const server = http.createServer(app)

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res
    .status(200)
    .json({
      "status": "success"
    })
})

server.listen(1000, () => console.log(`Listening on port 1000`))
