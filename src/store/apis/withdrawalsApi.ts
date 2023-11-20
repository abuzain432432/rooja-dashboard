import { baseApi } from './baseApi';

const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getWithdrawals: build.query({
      query: ({ page, searchedAccountId }) => {
        let url = `withdrawals?limit=10&page=${page}`;
        if (searchedAccountId) {
          url += `&accountId=${searchedAccountId}`;
        }
        return {
          url: url,
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
