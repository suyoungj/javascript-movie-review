import { BASE_URL, QUERY_PARAMS } from './constants';
import { MoviesResponse } from './movies';
import { MovieDetailResponse } from './movieDetail';

import { getErrorMessageByStatusCode } from '../../utils/errorHandler';

type ValidResponse = MoviesResponse | MovieDetailResponse;
type Request = <T extends ValidResponse>(path: string, params: typeof QUERY_PARAMS) => Promise<T>;

export const request: Request = async (path, params) => {
  const url = new URL(path, BASE_URL);
  url.search = createSearchParams(url, params);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(getErrorMessageByStatusCode(response.status));
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

const createSearchParams = (url: URL, params: Record<string, string>) => {
  return new URLSearchParams({
    ...Object.fromEntries(url.searchParams),
    ...params,
  }).toString();
};
