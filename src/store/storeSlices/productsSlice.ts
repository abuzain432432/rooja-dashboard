import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { ProductType } from '../../types/types.ts';

interface accountsStateType {
  loading: boolean;
  selectedProductData: ProductType | null;
}
const initialState: accountsStateType = {
  loading: false,
  selectedProductData: null,
};

const productsSlice = createSlice({
  name: 'accountsSlice',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setSelectedProductData: (state, action) => {
      state.selectedProductData = action.payload.data;
    },
  },
});
export const { setLoading, setSelectedProductData } =
  productsSlice.actions;
export const getProductsLoadingSlice = (state: RootState): boolean =>
  state.products.loading;
export const getProductSelectedData = (state: RootState) =>
  state.products.selectedProductData;
export default productsSlice.reducer;
