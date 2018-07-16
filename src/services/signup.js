import http from '../utils/http';

export const signUpUser = async (userInfo) => {
  return await http.post('/signup', userInfo);
}