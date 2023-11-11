import { AdminType } from '../../types/types';
import { baseApi } from './baseApi';

export interface loginApiType {
  email: string;
  password: string;
}

const adminApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createAdmin: build.mutation({
      query: (credentials: AdminType) => ({
        url: '/admins',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useCreateAdminMutation } = adminApi;
