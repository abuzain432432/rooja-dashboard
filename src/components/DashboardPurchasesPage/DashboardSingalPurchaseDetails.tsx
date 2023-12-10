import { Drawer } from 'antd';
import { PerchagesDetailsType } from '../../types/types';
import moment from 'moment';

export default function DashboardSingalPurchaseDetails({
  purchaseDetails,
  onClose,
}: {
  purchaseDetails: null | PerchagesDetailsType;
  onClose: () => void;
}) {
  return (
    <Drawer
      // title='Basic Drawer'
      placement='right'
      width={450}
      onClose={onClose}
      open={Boolean(purchaseDetails)}
    >
      <div>
        <div>
          <h2 className='text-xl font-bold text-gray-800 '>
            Purchase Details
          </h2>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Buyer
            </p>
            <p className='text-lg flex w-full gap-2 font-semibold text-gray-700'>
              <span>{purchaseDetails?.buyer?.first_name}</span>
              <span>{purchaseDetails?.buyer?.last_name}</span>
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Seller
            </p>
            <p className='text-lg flex w-full gap-2 font-semibold text-gray-700'>
              <span>{purchaseDetails?.seller?.first_name}</span>
              <span>{purchaseDetails?.seller?.last_name}</span>
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Amount
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat('en', {
                // style: 'currency',
                // currency: purchaseDetails?.currency || 'NGN',
              }).format(
                (purchaseDetails?.amount as number) /
                  (purchaseDetails?.currency_unit as number)
              )}
            </p>
          </div>

          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Balance
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat('en', {
                // style: 'currency',
                // currency: purchaseDetails?.currency || 'NGN',
              }).format(
                (purchaseDetails?.balance as number) /
                  (purchaseDetails?.currency_unit as number)
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Currency
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.currency}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Currency Unit
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.currency_unit}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Purchases Id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.id}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Account Id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.account_id}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Product id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.product_id}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Duration
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.duration} Sec
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Description
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.description}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Seller Balance
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat('en', {
                // style: 'currency',
                // currency: purchaseDetails?.currency || 'NGN',
              }).format(
                (purchaseDetails?.seller_balance as number) /
                  (purchaseDetails?.currency_unit as number)
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Seller Tx Fee
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat('en', {
                // style: 'currency',
                // currency: purchaseDetails?.currency || 'NGN',
              }).format(
                (purchaseDetails?.seller_tx_fee as number) /
                  (purchaseDetails?.currency_unit as number)
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Tx Fee
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              N
              {new Intl.NumberFormat('en', {
                // style: 'currency',
                // currency: purchaseDetails?.currency || 'NGN',
              }).format(
                (purchaseDetails?.tx_fee as number) /
                  (purchaseDetails?.currency_unit as number)
              )}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Status
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.status}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Seller Id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.seller_id}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Seller Tx Fee Percent
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.seller_tx_fee_percent}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              tx_fee_percent
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.tx_fee_percent}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Created At
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {moment(purchaseDetails?.created_at).format(
                'MMM Do YY'
              )}
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <h2 className='text-xl font-bold text-gray-800 '>
            Product Details
          </h2>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Product Name
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.product?.name}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Product Description
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.product?.description}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Product Status
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.product?.status}
            </p>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <p className='text-sm font-semibold text-gray-700'>
              Product id
            </p>
            <p className='text-lg font-semibold text-gray-700'>
              {purchaseDetails?.product?.id}
            </p>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
