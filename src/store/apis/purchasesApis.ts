// purchases
import { baseApi } from './baseApi';

const purchasesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPurchases: build.query({
      query: ({ page }) => {
        return {
          url: `purchases?limit=10&page=${page}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const { useGetPurchasesQuery } = purchasesApi;
