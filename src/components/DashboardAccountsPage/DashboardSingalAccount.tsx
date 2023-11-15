import { Drawer } from 'antd';
import {
  clearSingalAccountData,
  getSelectedAccountId,
  getSingalAccountSlice,
} from '../../store/storeSlices/accountsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DashboardSingalAccount() {
  const singalAccountData = useSelector(getSingalAccountSlice);
  const selectedAccountId = useSelector(getSelectedAccountId);
  const dispatch = useDispatch();
  return (
    <Drawer
      width={600}
      title='Account Details'
      placement='right'
      onClose={() => dispatch(clearSingalAccountData())}
      open={Boolean(singalAccountData) && Boolean(selectedAccountId)}
    >
      <div>
        <h2 className='text-xl font-bold text-gray-800 '>
          Personal Details
        </h2>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            First Name
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.first_name}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Last Name
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.last_name}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Language
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.lang}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>Phone</p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.phone}
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-xl font-bold text-gray-800 '>
          Bank Account Details
        </h2>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Bank Account Name
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.bank_account?.bank_account_name}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Bank Account Number
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.bank_account?.bank_account_no}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Bank Account Code
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.bank_account?.bank_code}
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-xl font-bold text-gray-800 '>
          Wallet Details
        </h2>

        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Balance
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.wallet?.balance}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Currency
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.wallet?.currency}
          </p>
        </div>
        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Currency Unit
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.wallet?.currency_unit}
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-xl font-bold text-gray-800 '>
          Settings Details
        </h2>

        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Account Id
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {singalAccountData?.settings?.account_id}
          </p>
        </div>

        <div className='border-b border-gray-200 py-2'>
          <p className='text-sm font-semibold text-gray-700'>
            Maximum Balance
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {new Intl.NumberFormat(singalAccountData?.lang || 'en', {
              style: 'currency',
              currency: singalAccountData?.wallet?.currency || 'NGN',
            }).format(
              singalAccountData?.settings?.data?.wallet
                ?.custom_max_balance as number
            )}
          </p>
        </div>
      </div>
    </Drawer>
  );
}
