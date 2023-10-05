import axios, { AxiosResponse } from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTYyZGFkZjU0ZjBiYzYyNjI2YTA4MjNhNzMwNzQ5OCIsInN1YiI6IjVkNjhhNjkyY2E4MzU0NWU1N2Y2YTMyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3RcfYunOHJBREfga-Lz18sTMLR0DksrTnr5zTVky6k`,
  },
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
