import { HttpResponse, http } from 'msw';
import {
  accountsTablePage1DummyData,
  accountsTablePage2DummyData,
  singalAccountDummyData,
  loginDummyData,
} from './unit-test-data.ts';
export const invalidAuthHandler = http.post(
  `https://roojaa-admin-proxy.dev.follomy.com/v1/authenticate`,
  () => {
    return HttpResponse.json({
      ...loginDummyData,
    });
  }
);

export const accountsTableSuccessCallHandler = http.get(
  `https://roojaa-admin-proxy.dev.follomy.com/v1/accounts`,

  ({ request }) => {
    const url = new URL(request.url);
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
  `https://roojaa-admin-proxy.dev.follomy.com/v1/accounts*`,

  () => {
    return HttpResponse.json({
      ...singalAccountDummyData,
    });
  }
);

export const handlers = [
  invalidAuthHandler,
  accountsTableSuccessCallHandler,
  singalAccountSuccessCallHandler,
];
