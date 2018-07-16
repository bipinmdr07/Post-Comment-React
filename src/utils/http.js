import axios from 'axios';

export default axios.create ({
  baseURL: 'http://localhost:8000/api',
  // baseURL: 'https://post-comment-api.herokuapp.com/api',
  // timeout: 1000,
  headers: {
    'Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  // headers: {
  //   'Origin': '*',
  //   'Content-Type': 'application/json'
  // }
});