import { API_KEY } from '../constants/constants';

export const moviesResponse = (limit: number) => {
  const URL = `https://api.kinopoisk.dev/v1/movie?page=1&limit=${limit}&year=2022-2023`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const moviesResponseById = (
  id: string | undefined
): Promise<unknown> => {
  if (!id) {
    throw new Error('Invalid id');
  }

  const URL = `https://api.kinopoisk.dev/v1/movie/${id}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const moviesPersonResponseById = (
  limit: number,
  query: string | undefined
): Promise<unknown> => {
  const URL = `https://api.kinopoisk.dev/v1/movie${
    query ? `?${query}` : ''
  }&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};
export const personResponseById = (
  id: string | undefined
): Promise<unknown> => {
  if (!id) {
    throw new Error('Invalid id');
  }
  const URL = `https://api.kinopoisk.dev/v1/person/${id}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const moviesResponseBySearch = (
  limit: number,
  query: string | undefined
): Promise<unknown> => {
  if (!query) {
    throw new Error('Query parameter is undefined');
  }
  const URL = `https://api.kinopoisk.dev/v1/movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const randomMovie = () => {
  const URL = 'https://api.kinopoisk.dev/v1/movie/random';
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const movieFilter = (query: string, limit: number): Promise<unknown> => {
  const URL = `https://api.kinopoisk.dev/v1/movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};
