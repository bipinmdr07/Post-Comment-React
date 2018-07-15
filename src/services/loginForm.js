import http from '../utils/http';

export async function login(props) {
  return await http.post('/login', props);
}