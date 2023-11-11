import { baseApi } from './baseApi';

const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAccounts: build.query({
      query: ({ page }) => {
        return {
          url: `accounts?limit=10&page=${page}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
      providesTags: ['user-update'],
    }),
    getSingalAccountData: build.query({
      query: (id: string) => {
        return {
          url: `accounts/${id}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
      providesTags: ['user-update'],
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetAccountsQuery,
  useLazyGetSingalAccountDataQuery,
} = accountApi;
