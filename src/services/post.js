import http from '../utils/http';
import { getAuthorizationHeader } from './authorizationHeader';


export const fetchPosts = async() => {
  const { data } = await http.get('/posts', getAuthorizationHeader(localStorage.token) );
  return data;
}

export const createPost = async(postData) => {
  await http.post('/posts/', postData, getAuthorizationHeader(localStorage.token));
}

export const fetchPost = async (id) => {
  const { data } = await http.get('/posts/' + id, getAuthorizationHeader(localStorage.token));
  return data;
}

export const updatePost = async (id, postUpdateData) => {
  await http.put('/posts/' + id, postUpdateData, getAuthorizationHeader(localStorage.token));
}

export const deletePost = async (id) => {
  await http.delete('/posts/' + id, getAuthorizationHeader(localStorage.token));
}