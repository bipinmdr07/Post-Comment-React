import http from '../utils/http';
import { authorizationHeader } from './post';

export const fetchComments = async (postId) => {
  return await http.get('/comments/?postId=' + postId, authorizationHeader);
}