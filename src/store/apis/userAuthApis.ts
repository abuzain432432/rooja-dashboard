import { baseApi } from './baseApi';

export interface loginApiType {
  email: string;
  password: string;
}

const extendedApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: (credentials: loginApiType) => ({
        url: '/authenticate',
        method: 'POST',
        // body: credentials,
        body: {
          password: 'PasswordAdmin1234567890@@',
          email: 'testadmin@example.com',
        },
      }),
    }),
    getMe: build.query({
      query: token => ({
        url: '/users/me',
        headers: { Authorization: 'Bearer ' + token },
      }),
      providesTags: ['user-update'],
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useGetMeQuery, useLazyGetMeQuery } =
  extendedApi;
