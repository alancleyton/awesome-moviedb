import axios, { AxiosResponse } from 'axios';

const headers = {
  Authorization: `Bearer ${process.env.VITE_APP_TMDB_API_KEY}`,
};

const AXIOS = axios.create({
  baseURL: process.env.VITE_APP_TMDB_BASE_URL,
  timeout: 30000,
  headers,
});

/**
 * HTTP GET method, used to fetch data
 * @param {string} url - endpoint you want to reach.
 * @param {object} params - axios request params.
 */
export const getApi = (
  url: string,
  params?: Record<string, unknown>,
): Promise<AxiosResponse> =>
  new Promise((resolve, reject) => {
    AXIOS.get(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
