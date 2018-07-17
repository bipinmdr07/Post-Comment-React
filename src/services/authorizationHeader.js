export const getAuthorizationHeader = (token) => {
  return ({
    headers: {
    Authorization: token
  }
  })
};