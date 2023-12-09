import {
  accountsApiParamsType,
  accountsApiResponseType,
  singalAccountApiPropsType,
  singalAccountApiResponseType,
} from '../../types/types';
import { baseApi } from './baseApi';

const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAccounts: build.query<
      accountsApiResponseType,
      accountsApiParamsType
    >({
      query: ({ page, firstName, lastName, email, phone }) => {
        let url = `accounts?limit=10&page=${page}`;
        if (firstName) {
          url += `&firstName=${firstName}`;
        }
        if (lastName) {
          url += `&lastName=${lastName}`;
        }
        if (email) {
          url += `&email=${email}`;
        }
        if (phone) {
          url += `&phone=${phone}`;
        }
        return {
          url,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
      providesTags: ['user-update'],
    }),
    getSingalAccountData: build.query<
      singalAccountApiResponseType,
      singalAccountApiPropsType
    >({
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
