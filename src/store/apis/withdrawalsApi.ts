import { baseApi } from './baseApi';

const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getWithdrawals: build.query({
      query: ({ page }) => {
        return {
          url: `withdrawals?limit=10&page=${page}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const { useGetWithdrawalsQuery } = accountApi;
