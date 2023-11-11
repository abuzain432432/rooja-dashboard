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
      { page: number }
    >({
      query: ({ page }) => {
        return {
          url: `fundings?limit=10&page=${page}`,
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
