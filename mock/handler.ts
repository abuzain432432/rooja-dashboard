import { HttpResponse, http } from 'msw';
import {
  accountsTablePage1DummyData,
  accountsTablePage2DummyData,
  singalAccountDummyData,
} from './unit-test-data.ts';
export const invalidAuthHandler = http.post(
  `https://roojaa-admin-proxy.dev.follomy.com/v1/authenticate`,

  () => {
    return HttpResponse.json({
      code: 16,
      message: 'authentication failed. please check your credentials',
      details: [],
    });
  }
);

export const accountsTableSuccessCallHandler = http.get(
  `https://roojaa-admin-proxy.dev.follomy.com/v1/accounts`,

  ({ request, params, cookies }) => {
    const url = new URL(request.url);

    console.log();
    console.log(params);
    console.log(cookies);
    console.log(request);
    if (+url.searchParams.get('page')! == 1) {
      return HttpResponse.json({
        ...accountsTablePage1DummyData,
      });
    } else {
      return HttpResponse.json({
        ...accountsTablePage2DummyData,
      });
    }
  }
);

export const singalAccountSuccessCallHandler = http.get(
  `http://roojaa-admin-proxy.dev.follomy.com/v1/accounts*`,

  () => {
    return HttpResponse.json({
      ...singalAccountDummyData,
    });
  }
);
// https://roojaa-admin-proxy.dev.follomy.com/v1/accounts/1ed06037-e442-498e-a12b-a41dba5edbd7

export const handlers = [
  invalidAuthHandler,
  accountsTableSuccessCallHandler,
  singalAccountSuccessCallHandler,
];
