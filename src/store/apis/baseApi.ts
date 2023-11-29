import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
export const BASE_URL =
  '';
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set(
        'appkey',
        ``
      );
      return headers;
    },
  }),

  endpoints: () => ({}),
  tagTypes: ['settings', 'projects', 'user-update'],
});
