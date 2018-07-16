import http from '../utils/http';

const authorizationHeader = {
  headers: {
    Authorization: localStorage.token
  }
};

export const fetchPosts = async() => {
  const { data } = await http.get('/posts', authorizationHeader );
  return data;
}

export const fetchPost = async (id) => {
  const { data } = await http.get('/posts/' + id, authorizationHeader );
  return data;
}

export const updatePost = async (id, postUpdateData) => {
  const { data } = await http.put('/posts/' + id, postUpdateData, authorizationHeader);
  console.log(data);
}

export const deletePost = async (id) => {
  const { data } = await http.delete('/posts/' + id, authorizationHeader);
}