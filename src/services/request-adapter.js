import axios from 'axios';

import appConfig from "./config";

export default class RequestAdapter {
  constructor() {
    this.baseUrl = appConfig.API_URL;
    let headers = {
      'Content-Type': 'application/json',
    };

    this.reqClient = axios.create({ headers });
    this.reqClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          console.error(error)
        }
        throw error;
      }
    );
  }

  sendGetRequest(URL, params) {
    return this.reqClient.get(URL, { params });
  }
}
