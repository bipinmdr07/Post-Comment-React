import http from '../utils/http';

const authorizationHeader = {
  headers: {
    Authorization: localStorage.token
  }
};

export async function fetchPosts() {
  const { data } = await http.get('/posts', authorizationHeader );
  return data;
}

export async function fetchPost(id) {
  const { data } = await http.get('/posts/' + id, authorizationHeader );
  return data;
}