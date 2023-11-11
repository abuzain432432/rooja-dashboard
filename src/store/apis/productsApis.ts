import { ProductType } from '../../types/types';
import { baseApi } from './baseApi';

const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query({
      query: ({ page }) => {
        return {
          url: `products?limit=10&page=${page}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
    }),
    createProduct: build.mutation({
      query: (productData: ProductType) => {
        return {
          url: '/products',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          method: 'POST',
          body: {
            name: productData.name,
            description: productData.description,
            status: productData.status,
          },
        };
      },
    }),
    updateProduct: build.mutation({
      query: (productData: ProductType) => {
        return {
          url: `/products/${productData.id}`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          method: 'PUT',
          body: {
            name: productData.name,
            description: productData.description,
            status: productData.status,
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsApi;
