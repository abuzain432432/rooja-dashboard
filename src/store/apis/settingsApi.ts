/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EmailSettingsType,
  PaystackSettingsType,
  PurchaseSettingsType,
  SettingsType,
  SmsSettingsType,
  SquadSettingsType,
  SystemSettingsType,
  WalletSettingsType,
} from '../../types/types';
import { baseApi } from './baseApi';

const settingsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getSettings: build.query<{ settings: SettingsType[] }, void>({
      query: () => ({
        url: `/settings`,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }),
      providesTags: ['settings'],
    }),
    updateSettings: build.mutation({
      query: ({
        data,
        id,
        settings_type,
      }: {
        settings_type: string;
        id: number | string;
        // prettier-ignore
        data:
           SquadSettingsType
          | PaystackSettingsType
          | WalletSettingsType
          | PurchaseSettingsType
          | SmsSettingsType
          | EmailSettingsType
          | SystemSettingsType;
      }) => {
        let reqeustBody = {};
        if (settings_type == 'SYSTEM') {
          reqeustBody = { settings_type, system: { ...data } };
        }
        if (settings_type == 'EMAIL') {
          reqeustBody = { settings_type, email: { ...data } };
        }
        if (settings_type == 'SMS') {
          reqeustBody = { settings_type, sms: { ...data } };
        }
        if (settings_type == 'PURCHASE') {
          reqeustBody = { settings_type, purchase: { ...data } };
        }
        if (settings_type == 'WALLET') {
          reqeustBody = { settings_type, wallet: { ...data } };
        }
        if (settings_type == 'PAYSTACK') {
          reqeustBody = { settings_type, paystack: { ...data } };
        }
        if (settings_type == 'SQUAD') {
          reqeustBody = { settings_type, squad: { ...data } };
        }
        return {
          url: `/settings/${id}`,
          method: 'PUT',
          body: reqeustBody,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
      invalidatesTags: ['settings'],
    }),
  }),
  overrideExisting: false,
});
export const { useGetSettingsQuery, useUpdateSettingsMutation } =
  settingsApi;
