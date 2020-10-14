import axios from 'axios';

// Default API will be 3000 default host
const API_ROOT = 'http://localhost:3000';
const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class RequestAdapter {
  constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }
  
}

export default RequestAdapter;
