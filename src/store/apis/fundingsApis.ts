import { FundingsType } from '../../types/types';
import { baseApi } from './baseApi';

const fundingsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getFundings: build.query<
      {
        current_page: number;
        limit: number;
        next_page: number;
        fundings: FundingsType[];
      },
      { page: number; searchedAccountId: string }
    >({
      query: ({ page, searchedAccountId }) => {
        let url = `fundings?limit=10&page=${page}`;
        if (searchedAccountId) {
          url += `&accountId=${searchedAccountId}`;
        }
        return {
          url,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const { useGetFundingsQuery } = fundingsApi;
