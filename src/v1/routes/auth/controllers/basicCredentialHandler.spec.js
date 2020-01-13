import { expect } from 'chai'
import * as basicCredentialHandler from './basicCredentialHandler'

describe('Basic Credential Handler', () => {
  describe('formatAuthorizationHeader', () => {
    it('should return an array with authorization None when no authorization header exists', () => {
      const header = ''
      const formattedHeader = basicCredentialHandler.formatAuthorizationHeader(header)
      expect(formattedHeader).to.eql(['Authorization', 'None'])
    })

    it('should return the credentials in an array', () => {
      const header = 'Authorization base64credentials'
      const formattedHeader = basicCredentialHandler.formatAuthorizationHeader(header)
      expect(formattedHeader).to.eql(['Authorization', 'base64credentials'])
    })
  })
})
