import axios from 'axios';
const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/WxF15Gnawut0Nc0TDHeY5YX1yq0zMFmR',
});
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
