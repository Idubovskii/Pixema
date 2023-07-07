import axios from 'axios';

import { API_KEY, KINO_API_URL } from '~/constants/constants';
import { type IData } from '~/types/data';
import { type IMovie } from '~/types/movie';
import { type IPerson } from '~/types/person';

export const moviesResponse = (limit: number) => {
  const URL = `${KINO_API_URL}movie?page=1&limit=${limit}&year=2022-2023`;
  return axios
    .get<IData>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const moviesResponseById = (id: string | undefined) => {
  if (!id) {
    throw new Error('Invalid id');
  }
  const URL = `${KINO_API_URL}movie/${id}`;
  return axios
    .get<IMovie>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const moviesPersonResponseById = (
  limit: number,
  query: string | undefined
) => {
  const URL = `${KINO_API_URL}movie${query ? `?${query}` : ''}&limit=${limit}`;
  return axios
    .get<IData>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const personResponseById = (id: string | undefined) => {
  if (!id) {
    throw new Error('Invalid id');
  }
  const URL = `${KINO_API_URL}person/${id}`;
  return axios
    .get<IPerson>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const moviesResponseBySearch = (
  limit: number,
  query: string | undefined
) => {
  if (!query) {
    throw new Error('Query parameter is undefined');
  }
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  return axios
    .get<IData>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const randomMovie = () => {
  const URL = `${KINO_API_URL}movie/random`;
  return axios
    .get<IMovie>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};

export const movieFilter = (query: string, limit: number) => {
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  return axios
    .get<IData>(URL, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data);
};
