// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
import axios from 'axios';

export const Api = {
  getData: async () => {
    const req = await axios('https://jsonplaceholder.typicode.com/posts');
    return req.data;
  },
};
