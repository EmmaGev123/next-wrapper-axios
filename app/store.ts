
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import axios from 'axios';
import { createWrapper } from 'next-redux-wrapper';
import productReducer from '@/pages/feauters/product/productSlice';
export const store = () => configureStore({
  reducer: {
    product: productReducer
  },
});
export type AppStore = ReturnType<typeof store>;
export const wrapper = createWrapper<AppStore>(store);


export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const myAxios = axios.create({
  baseURL: "https://fakestoreapi.com/"
})
