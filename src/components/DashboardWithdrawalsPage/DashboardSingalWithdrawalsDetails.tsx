import { Drawer } from 'antd';
import { WithdrawalDetailsType } from '../../types/types';
import moment from 'moment';
import {
  JsonView,
  allExpanded,
  darkStyles,
} from 'react-json-view-lite';
export default function DashboardWithdrawalsDetails({
  withdrwalDetails,
  onClose,
}: {
  withdrwalDetails: null | WithdrawalDetailsType;
  onClose: () => void;
}) {
  console.log(withdrwalDetails);
  return (
    <Drawer
      // title='Basic Drawer'
      placement='right'
      width={450}
      onClose={onClose}
      open={Boolean(withdrwalDetails)}
    >
      <div>
        <h2 className='text-xl font-bold text-gray-800 '>
          Withdrawals Details
        </h2>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Amount
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {(
              (withdrwalDetails?.amount as number) /
              (withdrwalDetails?.currency_unit as number)
            ).toFixed(2)}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Balance
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {(
              (withdrwalDetails?.balance as number) /
              (withdrwalDetails?.currency_unit as number)
            ).toFixed(2)}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            tx_fee
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {(
              (withdrwalDetails?.tx_fee as number) /
              (withdrwalDetails?.currency_unit as number)
            ).toFixed(2)}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Currency
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.currency}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Currency Unit
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.currency_unit}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Account Id
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account_id}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Status
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.status}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            tx Ref
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.tx_ref}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Withdrawal Method
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.withdrawal_method}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Created At
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {moment(withdrwalDetails?.created_at).format('MMM Do YY')}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Is Auto
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.is_auto ? 'True' : 'False'}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Gateway Response
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails && (
              <JsonView
                data={withdrwalDetails?.gateway_response}
                shouldExpandNode={allExpanded}
                style={darkStyles}
              />
            )}
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
            {withdrwalDetails?.account?.first_name}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Last Name
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account?.last_name}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>Email</p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account?.email}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Email Verified
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account?.email_verified
              ? 'True'
              : 'False'}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Status
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account?.status}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Language
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {withdrwalDetails?.account?.lang}
          </p>
        </div>

        {withdrwalDetails?.account?.phone && (
          <>
            <div className='border-b border-gray-200 py-2'>
              <p className='text-sm font-semibold text-gray-700'>
                Phone
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                {withdrwalDetails?.account?.phone}
              </p>
            </div>
            <div className='border-b border-gray-200 py-2'>
              <p className='text-sm font-semibold text-gray-700'>
                Phone Verified
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                {withdrwalDetails?.account?.phone_verified
                  ? 'True'
                  : 'False'}
              </p>
            </div>
          </>
        )}
      </div>
    </Drawer>
  );
}