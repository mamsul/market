const baseURL = process.env.NEXT_PUBLIC_PLATZI_BASE_URL;

export const fetcher = (url: string) =>
  fetch(baseURL + url).then((res) => res.json());

export const postFetcher = (url: string, data: Record<string, unknown>) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
