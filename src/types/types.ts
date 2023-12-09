export interface OverviewAccountsDetailsType {
  total_active_accounts: number;
  total_active_accounts_this_month: number;
  total_active_accounts_this_year: number;
  total_active_accounts_today: number;
  total_blocked_accounts: number;
  total_blocked_accounts_this_month: number;
  total_blocked_accounts_this_year: number;
  total_blocked_accounts_today: number;
  total_deleted_accounts: number;
  total_deleted_accounts_this_month: number;
  total_deleted_accounts_this_year: number;
  total_deleted_accounts_today: number;
  total_pending_accounts: number;
  total_pending_accounts_this_month: number;
  total_pending_accounts_this_year: number;
  total_pending_accounts_today: number;

  [key: string]: number; // This is the index signature
}

export interface OverviewPurchaseDetailsType {
  total_success_purchases: number | string;
  total_failed_purchases: number | string;
  total_pending_purchases: number | string;
  total_success_purchases_today: number | string;
  total_failed_purchases_today: number | string;
  total_pending_purchases_today: number | string;
  total_success_purchases_this_month: number | string;
  total_failed_purchases_this_month: number | string;
  total_pending_purchases_this_month: number | string;
  total_success_purchases_this_year: number | string;
  total_failed_purchases_this_year: number | string;
  total_pending_purchases_this_year: number | string;
  [key: string]: number | string; // This is the index signature
}
export interface OverviewWithdrawalsDetailsType {
  total_success_withdrawals: number | string;
  total_failed_withdrawals: number | string;
  total_pending_withdrawals: number | string;
  total_success_withdrawals_today: number | string;
  total_failed_withdrawals_today: number | string;
  total_pending_withdrawals_today: number | string;
  total_success_withdrawals_this_month: number | string;
  total_failed_withdrawals_this_month: number | string;
  total_pending_withdrawals_this_month: number | string;
  total_success_withdrawals_this_year: number | string;
  total_failed_withdrawals_this_year: number | string;
  total_pending_withdrawals_this_year: number | string;
  [key: string]: number | string; // This is the index signature
}
export interface OverviewFeesDetailsType {
  total_purchase_service_fees: number | string;
  total_purchase_service_fees_today: number | string;
  total_purchase_service_fees_this_month: number | string;
  total_purchase_service_fees_this_year: number | string;
  total_withdrawal_service_fees: number | string;
  total_withdrawal_service_fees_today: number | string;
  total_withdrawal_service_fees_this_month: number | string;
  total_withdrawal_service_fees_this_year: number | string;
  total_funding_gateway_fees: number | string;
  total_funding_gateway_fees_today: number | string;
  total_funding_gateway_fees_this_month: number | string;
  total_funding_gateway_fees_this_year: number | string;
  total_withdrawal_gateway_fees: number | string;
  total_withdrawal_gateway_fees_today: number | string;
  total_withdrawal_gateway_fees_this_month: number | string;
  total_withdrawal_gateway_fees_this_year: number | string;
  [key: string]: number | string; // This is the index signature
}
export interface OverviewFundingsDetailsType {
  total_success_fundings: number | string;
  total_failed_fundings: number | string;
  total_pending_fundings: number | string;
  total_expired_fundings: number | string;
  total_success_fundings_today: number | string;
  total_failed_fundings_today: number | string;
  total_pending_fundings_today: number | string;
  total_expired_fundings_today: number | string;
  total_success_fundings_this_month: number | string;
  total_failed_fundings_this_month: number | string;
  total_pending_fundings_this_month: number | string;
  total_expired_fundings_this_month: number | string;
  total_success_fundings_this_year: number | string;
  total_failed_fundings_this_year: number | string;
  total_pending_fundings_this_year: number | string;
  total_expired_fundings_this_year: number | string;
  [key: string]: number | string; // This is the index signature
}
export interface BankAccountType {
  id: string;
  account_id: string;
  bank_code: string;
  bank_account_no: string;
  bank_account_name: string;
}

export interface SettingType {
  account_id: string;
  id: string;
  data: { wallet: { custom_max_balance: number } };
}

interface WalletType {
  account_id: string;
  balance: number;
  currency: string;
  currency_unit: number;
  id: string;
  tx_summary: {
    account_id: string;
    total_commission: number;
    total_fundings: number;
    total_pending_withdrawals: number;
    total_purchases: number;
    total_sales: number;
    total_withdrawals: number;
  };
}
export interface SingalAccountDetailsType {
  bank_account: BankAccountType;
  email: string;
  email_verified: boolean;
  first_name: string;
  id: string;
  lang: string;
  last_name: string;
  phone: string;
  phone_verified: boolean;
  settings: SettingType;
  status: boolean;
  wallet: WalletType;
}

export interface singalAccountApiResponseType {
  account: {
    bank_account: BankAccountType;
    wallet: WalletType;
    settings: {
      id: 14;
      account_id: string;
      data: {
        wallet: {
          custom_max_balance: number;
        };
      };
    };
  } & UserType;
}

export type singalAccountApiPropsType = string;

type FilterTypes = 'month' | 'year' | 'today';

export type DashboardAccountsFilterType = FilterTypes | 'accounts';

export type DashboardFeesFilterType = FilterTypes | 'fees';

export type DashboardWithdrawalsFilterType =
  | FilterTypes
  | 'withdrawals';

export type DashboardPurchasesFilterType = FilterTypes | 'purchases';

export type DashboardFundingsFilterType = FilterTypes | 'fundings';

export enum ROELS {
  REGULAR = 'REGULAR',
  SUPPORT = 'SUPPORT',
  SALES = 'SALES',
  SUPER = 'SUPER',
}

export type BarChartType =
  | 'pending'
  | 'active'
  | 'blocked'
  | 'deleted';

export interface UserType {
  email: string;
  email_verified: boolean;
  first_name: string;
  id: string;
  lang: string;
  last_name: string;
  phone: string;
  phone_verified: boolean;
  status: string;
  role?: string;
}
export interface accountsApiResponseType {
  accounts: UserType[];
  current_page: number;
  limit: number;
  next_page: number;
}
export interface accountsApiParamsType {
  page: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface WithdrawalDetailsType {
  account: UserType;
  account_id: string;
  amount: number;
  balance: number;
  created_at: string;
  currency: string;
  currency_unit: number;
  id: string;
  is_auto: boolean;
  status: string;
  tx_fee: number;
  tx_ref: string;
  withdrawal_method: string;
  gateway_response: string;
}

export interface UserType {
  id: string;
  first_name: string;
  last_name: string;
}
export interface ProductType {
  id?: number;
  name: string;
  key?: string;
  description: string;
  status: string;
}
export interface PerchagesDetailsType {
  account_id: string;
  amount: number;
  balance: number;
  buyer: UserType;
  created_at: string;
  currency: string;
  currency_unit: number;
  description: string;
  duration: number;
  id: string;

  product: ProductType;
  product_id: number;
  seller: UserType;
  seller_balance: number;
  seller_id: string;
  seller_tx_fee: number;
  seller_tx_fee_percent: number;
  status: string;
  tx_fee: number;
  tx_fee_percent: number;
}

//////////// SETTINGS
export type SystemSettingsType = {
  android_app_version: string;
  api_version: string;
  force_upgrade_android_app_version: number;
  force_upgrade_ios_app_version: number;
  ios_app_version: string;
  max_parallel_goroutine: number;
  must_upgrade_android_app_version: string;
  must_upgrade_ios_app_version: string;
  server_version: string;
  verify_code_expire_in_minute: number;
  [key: string]: string | number; // This is the index signature
};

export type EmailSettingsType = {
  aws_email_config_set: string;
  general_purpose_email_template: string;
  max_send_email_code_retry: number;
  no_reply_email_address: string;
  send_new_email_code_after_max_retry_in_hours: number;
  send_new_email_code_in_minutes: number;
};

export type SmsSettingsType = {
  max_send_sms_code_retry: number;
  send_new_sms_code_after_max_retry_in_hours: number;
  send_new_sms_code_in_minutes: number;
};

export type PurchaseSettingsType = {
  buyer_purchase_tx_fee_percentage: number;
  maximum_single_tx_amount: number;
  minimum_single_tx_amount: number;
  seller_purchase_tx_fee_percentage: number;
};

export type WalletSettingsType = {
  free_withdrawals_per_day: number;
  maximum_funding_amount: number;
  maximum_wallet_balance: number;
  maximum_withdrawal_amount: number;
  minimum_funding_amount: number;
  minimum_withdrawal_amount: number;
  purchase_received_withdrawal_tx_fee: number;
  withdrawal_tx_fee_percentage: number;
};

export type PaystackSettingsType = {
  paystack_5k_and_below_transfer_fee: number;
  paystack_50k_and_above_transfer_fee: number;
  paystack_50k_and_below_transfer_fee: number;
};

export type SquadSettingsType = {
  dva_duration_in_seconds: number;
  dva_email: string;
  dva_tx_fee_percentage: number;
};

export type SettingsType = {
  id: number;
  settings_type:
    | 'SYSTEM'
    | 'EMAIL'
    | 'SMS'
    | 'PURCHASE'
    | 'WALLET'
    | 'PAYSTACK'
    | 'SQUAD';
  system?: SystemSettingsType;
  email?: EmailSettingsType;
  sms?: SmsSettingsType;
  purchase?: PurchaseSettingsType;
  wallet?: WalletSettingsType;
  paystack?: PaystackSettingsType;
  squad?: SquadSettingsType;
};

// FUNDING TYPEs
export interface FundingsType {
  account_id: string;
  amount: number;
  balance: number;
  created_at: string;
  currency: string;
  currency_unit: number;
  funding_method: string;
  gateway_response: string;
  id: string;
  payment_gateway: string;
  status: string;
  tx_ref: string;
  account: UserType;
  dynamic_virtual_account_info: {
    account_name: string;
    account_number: string;
    bank: string;
    currency: string;
    expected_amount: string;
    expires_at: string;
    funding_id: string;
    id: number;
    tx_ref: string;
  };
}

export interface AdminType {
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  role: string;
  title: string;
  lang: string;
}

export interface SystemEditSettingsType {
  systemSettings: SystemSettingsType;
  id: string | number;
  settings_type: string;
}
export interface EmailEditSettingsType {
  emailSettings: EmailSettingsType;
  settings_type: string;
  id: string | number;
}
export interface SmsEditSettingsType {
  smsSettings: SmsSettingsType;
  settings_type: string;
  id: string | number;
}
export interface PurchaseEditSettingsType {
  purchaseSettings: PurchaseSettingsType;
  settings_type: string;
  id: string | number;
}
export interface WalletEditSettingsType {
  walletSettings: WalletSettingsType;
  settings_type: string;
  id: string | number;
}
export interface PaystacktEditSettingsType {
  paystackSettings: PaystackSettingsType;
  settings_type: string;
  id: string | number;
}
export interface SquadEditSettingsType {
  squadSettings: SquadSettingsType;
  settings_type: string;
  id: string | number;
}
export interface EditSettingsType {
  systemSettings: SystemEditSettingsType | null;
  emailSettings: EmailEditSettingsType | null;
  smsSettings: SmsEditSettingsType | null;
  purchaseSettings: PurchaseEditSettingsType | null;
  walletSettings: WalletEditSettingsType | null;
  paystackSettings: PaystacktEditSettingsType | null;
  squadSettings: SquadEditSettingsType | null;
}
