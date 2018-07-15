import http from '../utils/http';

export async function fetchPosts() {
  const { data } = await http.get('/posts');
  return data;
}