import { type IData } from '~/types/data';
import { type IMovie } from '~/types/movie';
import { type IPerson } from '~/types/person';

import { API_KEY, KINO_API_URL } from '../constants/constants';

export const moviesResponse = (limit: number) => {
  const URL = `${KINO_API_URL}movie?page=1&limit=${limit}&year=2022-2023`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IData>;
};

export const moviesResponseById = (id: string | undefined) => {
  if (!id) {
    throw new Error('Invalid id');
  }
  const URL = `${KINO_API_URL}movie/${id}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IMovie>;
};

export const moviesPersonResponseById = (
  limit: number,
  query: string | undefined
) => {
  const URL = `${KINO_API_URL}movie${query ? `?${query}` : ''}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IData>;
};

export const personResponseById = (id: string | undefined) => {
  if (!id) {
    throw new Error('Invalid id');
  }
  const URL = `${KINO_API_URL}person/${id}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IPerson>;
};

export const moviesResponseBySearch = (
  limit: number,
  query: string | undefined
) => {
  if (!query) {
    throw new Error('Query parameter is undefined');
  }
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IData>;
};

export const randomMovie = () => {
  const URL = `${KINO_API_URL}movie/random`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IMovie>;
};

export const movieFilter = (query: string, limit: number) => {
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json()) as Promise<IData>;
};
