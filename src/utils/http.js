import axios from 'axios';

export default axios.create ({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'https://post-comment-api.herokuapp.com/api',
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