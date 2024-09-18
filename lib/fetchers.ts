import { ENV } from './constants';

export const fetcher = (url: string) => fetch(ENV.API_URL + url).then((res) => res.json());

export const postFetcher = (url: string, data: Record<string, unknown>) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
