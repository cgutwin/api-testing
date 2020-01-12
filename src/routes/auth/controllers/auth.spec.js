import supertest from 'supertest'
import { app, server } from '../../../../src'

describe('Auth Route', () => {
  after(done => server.close(done))
  describe('GET', () => {
    describe('/', () => {
      it('responds with JSON', done => {
        supertest(app)
          .get('/auth/')
          /* Content-Type response replies with both app/json and content type. Just test for json in the string */
          .expect('Content-Type', /json/)
          .expect(200, done)
      })
    })
  })
})
