import http from '../utils/http';

export const authorizationHeader = {
  headers: {
    Authorization: localStorage.token
  }
};

export const fetchPosts = async() => {
  const { data } = await http.get('/posts', authorizationHeader );
  return data;
}

export const createPost = async(postData) => {
  await http.post('/posts/', postData, authorizationHeader);
}

export const fetchPost = async (id) => {
  const { data } = await http.get('/posts/' + id, authorizationHeader );
  return data;
}

export const updatePost = async (id, postUpdateData) => {
  await http.put('/posts/' + id, postUpdateData, authorizationHeader);
}

export const deletePost = async (id) => {
  await http.delete('/posts/' + id, authorizationHeader);
}