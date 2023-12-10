import { Drawer } from 'antd';
import { FundingsType } from '../../types/types';
import moment from 'moment';
import JSONPretty from 'react-json-pretty';

export default function DashboardSingalFundingDetails({
  fundingsDetails,
  onClose,
}: {
  fundingsDetails: null | FundingsType;
  onClose: () => void;
}) {
  return (
    <Drawer
      placement='right'
      width={450}
      onClose={onClose}
      open={Boolean(fundingsDetails)}
    >
      <div>
        <div>
          <h2 className='text-xl font-bold text-gray-800 '>
            Fundings Details
          </h2>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Amount
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat(
                fundingsDetails?.account?.lang || 'en'
                // {
                //   style: 'currency',
                //   currency: fundingsDetails?.currency || 'NGN',
                // }
              ).format(
                (fundingsDetails?.amount as number) /
                  (fundingsDetails?.currency_unit as number)
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Balance
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat(
                fundingsDetails?.account?.lang || 'en',
                {
                  // style: 'currency',
                  // currency: fundingsDetails?.currency || 'NGN',
                }
              ).format(
                (fundingsDetails?.balance as number) /
                  (fundingsDetails?.currency_unit as number)
              )}
            </p>
          </div>

          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Created At
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {moment(fundingsDetails?.created_at).format(
                'MMM Do YY'
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Currency
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.currency}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Currency Unit
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.currency_unit}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Account Id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account_id}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Funding Method
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.funding_method}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Payment Gateway
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.payment_gateway}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Status
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.status}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              tx_ref
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.tx_ref}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold mb-1 text-gray-700'>
              Gateway Response
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.gateway_response && (
                <JSONPretty
                  id='json-pretty'
                  data={
                    fundingsDetails?.gateway_response as unknown as object
                  }
                />
              )}
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <h2 className='text-xl font-bold text-gray-800 '>
            Dynamic Virtual Account Info
          </h2>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Account Name
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {
                fundingsDetails?.dynamic_virtual_account_info
                  ?.account_name
              }
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Account Number
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {
                fundingsDetails?.dynamic_virtual_account_info
                  ?.account_number
              }
            </p>
          </div>

          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Bank
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.dynamic_virtual_account_info?.bank}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Currency
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {
                fundingsDetails?.dynamic_virtual_account_info
                  ?.currency
              }
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Expected Amount
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat(
                fundingsDetails?.account?.lang || 'en',
                {
                  // style: 'currency',
                  // currency: fundingsDetails?.currency || 'NGN',
                }
              ).format(
                +(
                  fundingsDetails?.dynamic_virtual_account_info
                    ?.expected_amount || 0
                )
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Expires At
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {moment(
                fundingsDetails?.dynamic_virtual_account_info
                  ?.expires_at
              ).format('MMM Do YY')}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Funding Id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {
                fundingsDetails?.dynamic_virtual_account_info
                  ?.funding_id
              }
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Tx Ref
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.dynamic_virtual_account_info?.tx_ref}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>id</p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.dynamic_virtual_account_info?.id}
            </p>
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-bold text-gray-800 '>
            Account Details
          </h2>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              First Name
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.first_name}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Last Name
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.last_name}
            </p>
          </div>

          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Status
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.status}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Email
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.email}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Email Verified
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.email_verified
                ? 'True'
                : 'False'}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Language
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.lang}
            </p>
          </div>
          {fundingsDetails?.account?.phone && (
            <div className='border-b border-gray-200 py-2'>
              <p className='text-sm font-semibold text-gray-700'>
                Phone
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                {fundingsDetails?.account?.phone}
              </p>
            </div>
          )}
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Phone Verified
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {fundingsDetails?.account?.phone_verified
                ? 'True'
                : 'False'}
            </p>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
