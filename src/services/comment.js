import http from '../utils/http';
import { getAuthorizationHeader } from './authorizationHeader';

export const fetchComments = async (postId) => {
  return await http.get('/comments/?postId=' + postId, getAuthorizationHeader(localStorage.token));
}