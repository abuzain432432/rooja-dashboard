import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
export const BASE_URL = 'BACK_END_POINT';
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set('appkey', `API_KEy`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['settings', 'projects', 'user-update'],
});
