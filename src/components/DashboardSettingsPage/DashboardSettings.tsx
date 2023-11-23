/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useGetSettingsQuery } from '../../store/apis/settingsApi';
import toast from 'react-hot-toast';
import { Spin } from 'antd';
import CustomButton from '../ui/CutomButton';
import { AiOutlineEdit } from 'react-icons/ai';
import SystemSettings from './SystemSettings';
import EmailSettings from './EmailSettings';
import SmsSettings from './SmsSettings';
import PurchaseSettings from './PurchaseSettings';
import WalletSettings from './WalletSettings';
import PaystackSettings from './PaystackSettings';
import SquadSettings from './SquadSettings';
import {
  EditSettingsType,
  EmailSettingsType,
  PaystackSettingsType,
  PurchaseSettingsType,
  SmsSettingsType,
  SquadSettingsType,
  SystemSettingsType,
  WalletSettingsType,
} from '../../types/types.ts';

const initialSettingsEditData = {
  systemSettings: null,
  emailSettings: null,
  smsSettings: null,
  purchaseSettings: null,
  walletSettings: null,
  squadSettings: null,
  paystackSettings: null,
};
export default function DashboardSettings() {
  const { isFetching, data, error } = useGetSettingsQuery();
  const [settingsEditsData, setSettingsEditsData] =
    useState<EditSettingsType>(initialSettingsEditData);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);
  const handleEditClear = () => {
    setSettingsEditsData(initialSettingsEditData);
  };

  const uiData = data?.settings.map(settingData => {
    if (settingData.settings_type === 'SYSTEM') {
      const settings = settingData.system;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div className=''>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span className=''>Android App Version:</span>
              <span className='font-semibold'>
                {settings?.android_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Api Version</span>:
              <span className='font-semibold'>
                {settings?.api_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Force Upgrade Android App Version:</span>
              <span className='font-semibold'>
                {settings?.force_upgrade_android_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span> Force Upgrade Ios App Version:</span>
              <span className='font-semibold'>
                {settings?.force_upgrade_ios_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Ios App Version:</span>
              <span className='font-semibold'>
                {settings?.ios_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Max Parallel Goroutine :</span>
              <span className='font-semibold'>
                {settings?.max_parallel_goroutine}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span> Must Upgrade Android App Version :</span>
              <span className='font-semibold'>
                {settings?.must_upgrade_android_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Must Upgrade Ios App Version :</span>
              <span className='font-semibold'>
                {settings?.must_upgrade_ios_app_version}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Server Version :</span>
              <span className='font-semibold'>
                {settings?.server_version}
              </span>
            </div>

            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Verify Code Expire In Minute :</span>
              <span className='font-semibold'>
                {settings?.verify_code_expire_in_minute}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: null,
                  purchaseSettings: null,
                  smsSettings: null,
                  squadSettings: null,
                  walletSettings: null,
                  systemSettings: {
                    systemSettings: settings as SystemSettingsType,
                    settings_type: settingData.settings_type,
                    id: settingData.id,
                  },
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
    if (settingData.settings_type === 'WALLET') {
      const settings = settingData.wallet;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Free Withdrawals Per Day:</span>
              <span className='font-semibold'>
                {settings?.free_withdrawals_per_day}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Maximum Funding Amount: </span>
              <span className='font-semibold'>
                N
                {new Intl.NumberFormat('en').format(
                  settings?.maximum_funding_amount as number
                )}
                {/* {settings?.maximum_funding_amount} */}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Maximum Wallet Balance: </span>

              <span className='font-semibold'>
                N
                {new Intl.NumberFormat('en').format(
                  settings?.maximum_wallet_balance as number
                )}
                {/* {settings?.maximum_wallet_balance} */}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Maximum Withdrawal Amount: </span>
              <span className='font-semibold'>
                {/* {settings?.maximum_withdrawal_amount} */}N
                {new Intl.NumberFormat('en').format(
                  settings?.maximum_withdrawal_amount as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Minimum Funding Amount: </span>
              <span className='font-semibold'>
                {/* {settings?.minimum_funding_amount} */}N
                {new Intl.NumberFormat('en').format(
                  settings?.minimum_funding_amount as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Minimum Withdrawal Amount: </span>
              <span className='font-semibold'>
                {/* {settings?.minimum_withdrawal_amount} */}N
                {new Intl.NumberFormat('en').format(
                  settings?.minimum_withdrawal_amount as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Purchase Received Withdrawal Tx Fee: </span>
              <span className='font-semibold'>
                {/* {settings?.purchase_received_withdrawal_tx_fee} */}
                N
                {new Intl.NumberFormat('en').format(
                  settings?.purchase_received_withdrawal_tx_fee as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Withdrawal Tx Fee Percentage: </span>
              <span className='font-semibold'>
                {settings?.withdrawal_tx_fee_percentage}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: null,
                  purchaseSettings: null,
                  smsSettings: null,
                  squadSettings: null,
                  walletSettings: {
                    walletSettings: settings as WalletSettingsType,
                    settings_type: settingData.settings_type,
                    id: settingData.id,
                  },
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
    if (settingData.settings_type === 'EMAIL') {
      const settings = settingData.email;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>AWS Email Config Set: </span>
              <span className='font-semibold'>
                {settings?.aws_email_config_set}
              </span>{' '}
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>General Purpose Email Template: </span>
              <span className='font-semibold'>
                {settings?.general_purpose_email_template}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Max Send Email Code Retry </span>
              <span className='font-semibold'>
                {settings?.max_send_email_code_retry}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              {' '}
              <span>No Reply Email Address </span>
              <span className='font-semibold'>
                {settings?.no_reply_email_address}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Send New Email Code In Minutes: </span>
              <span className='font-semibold'>
                {settings?.send_new_email_code_in_minutes}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: {
                    emailSettings: settings as EmailSettingsType,
                    id: settingData.id,
                    settings_type: settingData.settings_type,
                  },
                  paystackSettings: null,
                  purchaseSettings: null,
                  smsSettings: null,
                  squadSettings: null,
                  walletSettings: null,
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
    if (settingData.settings_type === 'SMS') {
      const settings = settingData.sms;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div className=' '>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Max Send Sms Code Eetry: </span>
              <span className='font-semibold'>
                {settings?.max_send_sms_code_retry}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>
                Send New Sms Code After Max Retry In Hours:{' '}
              </span>
              <span className='font-semibold'>
                {settings?.send_new_sms_code_after_max_retry_in_hours}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Send New Sms Code In Minute </span>
              <span className='font-semibold'>
                {settings?.send_new_sms_code_in_minutes}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: null,
                  purchaseSettings: null,
                  smsSettings: {
                    smsSettings: settings as SmsSettingsType,
                    id: settingData.id,
                    settings_type: settingData.settings_type,
                  },
                  squadSettings: null,
                  walletSettings: null,
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
    if (settingData.settings_type === 'SQUAD') {
      const settings = settingData.squad;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              {' '}
              <span>Dva Duration In Seconds: </span>
              <span className='font-semibold'>
                {settings?.dva_duration_in_seconds}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              {' '}
              <span>Dva Email:</span>
              <span className='font-semibold'>
                {settings?.dva_email}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              {' '}
              <span>Dva Tx Fee Percentage: </span>
              <span className='font-semibold'>
                {settings?.dva_tx_fee_percentage}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: null,
                  purchaseSettings: null,
                  smsSettings: null,
                  squadSettings: {
                    squadSettings: settings as SquadSettingsType,
                    id: settingData.id,
                    settings_type: settingData.settings_type,
                  },
                  walletSettings: null,
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
    if (settingData.settings_type === 'PURCHASE') {
      const settings = settingData.purchase;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              {' '}
              <span>Buyer Purchase Tx Fee Percentage: </span>
              <span className='font-semibold'>
                {settings?.buyer_purchase_tx_fee_percentage}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Maximum Single Tx Amount: </span>
              <span className='font-semibold'>
                {/* {settings?.maximum_single_tx_amount} */}N
                {new Intl.NumberFormat('en').format(
                  settings?.maximum_single_tx_amount as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Minimum Single Tx Amount: </span>
              <span className='font-semibold'>
                {/* {settings?.minimum_single_tx_amount} */}N
                {new Intl.NumberFormat('en').format(
                  settings?.minimum_single_tx_amount as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Seller Purchase Tx Fee Percentage: </span>
              <span className='font-semibold'>
                {settings?.seller_purchase_tx_fee_percentage}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: null,
                  purchaseSettings: {
                    purchaseSettings:
                      settings as PurchaseSettingsType,
                    id: settingData.id,
                    settings_type: settingData.settings_type,
                  },
                  smsSettings: null,
                  squadSettings: null,
                  walletSettings: null,
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }

    if (settingData.settings_type === 'PAYSTACK') {
      const settings = settingData.paystack;
      return (
        <div
          key={settingData.settings_type}
          className=' py-4 px-4  rounded-lg  bg-white'
        >
          <div>
            <div className='text-2xl lowercase flex gap-2 w-fit  xl:py-1.5 lg:py-1 2xl:px-6 lg:px-3 mb-2  font-semibold'>
              <span className='first-letter:uppercase'>
                {settingData.settings_type}
              </span>
              <span>Settings</span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Paystack 5k And Below Transfer Fee: </span>
              <span className='font-semibold'>
                {/* {settings?.paystack_5k_and_below_transfer_fee} */}
                N
                {new Intl.NumberFormat('en').format(
                  settings?.paystack_5k_and_below_transfer_fee as number
                )}
              </span>
            </div>
            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Paystack 50k And Above Transfer Fee: </span>
              <span className='font-semibold'>
                {/* {settings?.paystack_50k_and_above_transfer_fee} */}
                N
                {new Intl.NumberFormat('en').format(
                  settings?.paystack_50k_and_above_transfer_fee as number
                )}
              </span>
            </div>

            <div className='flex gap-2 border-b xl:py-2 lg:py-1 justify-between 2xl:px-6 lg:px-3 border-gray-200 w-full'>
              <span>Paystack 50k And Below Transfer Fee: </span>
              <span className='font-semibold'>
                {/* {settings?.paystack_50k_and_below_transfer_fee} */}
                N
                {new Intl.NumberFormat('en').format(
                  settings?.paystack_50k_and_below_transfer_fee as number
                )}
              </span>
            </div>
          </div>
          <div className='w-full flex mt-4 justify-end items-end'>
            <CustomButton
              onClick={() => {
                setSettingsEditsData({
                  emailSettings: null,
                  paystackSettings: {
                    paystackSettings:
                      settings as PaystackSettingsType,
                    id: settingData.id,
                    settings_type: settingData.settings_type,
                  },
                  purchaseSettings: null,
                  smsSettings: null,
                  squadSettings: null,
                  walletSettings: null,
                  systemSettings: null,
                });
              }}
              icon={<AiOutlineEdit />}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <div className='bg-gray-200 2xl:p-10 xl:p-6 lg:px-4 lg:py-7 p-3 min-h-[calc(100vh-70px)] w-full'>
      {isFetching && (
        <div className='flex h-full justify-center items-center'>
          <Spin size='large' />
        </div>
      )}
      <div className='grid grid-cols-2 xl:gap-7 lg:gap-4'>
        {uiData}
      </div>
      <SystemSettings
        onClose={handleEditClear}
        systemSettings={settingsEditsData.systemSettings}
      />
      <EmailSettings
        onClose={handleEditClear}
        emailSettings={settingsEditsData.emailSettings}
      />
      <SmsSettings
        onClose={handleEditClear}
        smsSettings={settingsEditsData.smsSettings}
      />
      <PurchaseSettings
        onClose={handleEditClear}
        purchaseSettings={settingsEditsData.purchaseSettings}
      />
      <WalletSettings
        onClose={handleEditClear}
        walletSettings={settingsEditsData.walletSettings}
      />
      <PaystackSettings
        onClose={handleEditClear}
        paystackSettings={settingsEditsData.paystackSettings}
      />
      <SquadSettings
        onClose={handleEditClear}
        squadSettings={settingsEditsData.squadSettings}
      />
    </div>
  );
}
