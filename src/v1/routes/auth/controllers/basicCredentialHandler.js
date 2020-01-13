/*
* formatAuthorizationHeader
*
* @param {string} header - The authorization header
*
* Takes the authorization header, and if exists, will return it formatted split
* in an array. Main purpose of function to give a consistent base case if no
* header exists.
* */
export const formatAuthorizationHeader = (header) => {
  let formatted = ['Authorization', 'None']
  if (header) formatted = header.split(' ')
  return formatted
}

