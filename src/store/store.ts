import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './apis/baseApi.ts';
import userAuthSliceReducer from './storeSlices/userAuthSlice.ts';
import accountsSliceReducer from './storeSlices/accountsSlice.ts';
import productsSliceReducer from './storeSlices/productsSlice.ts';
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    userAuth: userAuthSliceReducer,
    accounts: accountsSliceReducer,
    products: productsSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export default store;
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
