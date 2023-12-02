// import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './apis/baseApi.ts';
import userAuthSliceReducer from './storeSlices/userAuthSlice.ts';
import accountsSliceReducer from './storeSlices/accountsSlice.ts';
import productsSliceReducer from './storeSlices/productsSlice.ts';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     userAuth: userAuthSliceReducer,
//     accounts: accountsSliceReducer,
//     products: productsSliceReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });
// export default store;
// setupListeners(store.dispatch);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  userAuth: userAuthSliceReducer,
  accounts: accountsSliceReducer,
  products: productsSliceReducer,
});

export const setupStore = (
  preloadedState?: PreloadedState<RootState>
) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(baseApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
