import { API_KEY, KINO_API_URL } from '../constants/constants';

export const moviesResponse = (limit: number) => {
  const URL = `${KINO_API_URL}movie?page=1&limit=${limit}&year=2022-2023`;
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

  const URL = `${KINO_API_URL}movie/${id}`;
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
  const URL = `${KINO_API_URL}movie${query ? `?${query}` : ''}&limit=${limit}`;
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
  const URL = `${KINO_API_URL}person/${id}`;
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
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const randomMovie = () => {
  const URL = `${KINO_API_URL}movie/random`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};

export const movieFilter = (query: string, limit: number): Promise<unknown> => {
  const URL = `${KINO_API_URL}movie?${query}&limit=${limit}`;
  const request = new Request(URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': `${API_KEY}`
    }
  });

  return fetch(request).then((response) => response.json());
};
